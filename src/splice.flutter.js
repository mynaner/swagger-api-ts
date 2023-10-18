



function getCamelCase(str) {
  let arr = str.split('_');
  return arr.map((item, index) => {
    if (index === 0) {
      return item;
    } else {
      return item.charAt(0).toUpperCase() + item.slice(1);
    }
  }).join('');
}

/**
 * 
 * @param {string} name 方法名
 * @param {string} url 请求地址
 * @param {'get'|'post'|"put"|'delete'} dioMethod 请求类型
 * @param {string} resultType 返回类型
 * @param {[string,string][]} urlParams urlParams参数  
 * @param {string} params params参数 
 * @param {string} data data参数
 * @returns 
 */
const templatefn = (name, summary, url, dioMethod = "get", resultType, urlParams, params, data) => {
  /// 
  let listParams = "";
  let dioData = data;
  let dioParam = "";

  let diourlParam = "";

  if (typeof params == "string") {
    dioParam = "...params.toJson()";
    listParams += `required ${params} params,`
  }


  if (urlParams.length > 0) {
    listParams += urlParams.map(e => {
      return e.reverse().join("? ");
    }).join(",");

    diourlParam = `${dioParam}${dioParam.length > 0 ? "," : ''}${urlParams.map(e => `"${e[1]}":${e[1]}`).join(",")}`;
    // dioData = data.map(e => `"${e[0]}":${e[1]}`).join(",");
  } else {
    diourlParam = dioParam;
  }

  if (data) {
    if (diourlParam.length != 0 || dioParam.length != 0) {
      listParams += ","
    }
    listParams += `required ${data} data`
  }



  const rfromJson = () => {
    if (resultType) {
      if (['int', "bool", 'String', "dynamic"].includes(resultType)) {
        return;
      } else if (resultType.substring(0, 4) == "List") {
        const t = resultType.substring(5, resultType.length - 1);
        if (!['List<int>', "List<bool>", 'List<String>'].includes(resultType)) {
          return ` 
              ${resultType} list = [];
              if (data != null) {
                for (var item in data) {
                  list.add(${t}.fromJson(item));
                }
              }
              return list;
            `
        }
      } else if (resultType.substring(0, 6) == "IPage<") {

        return `return ${resultType}.fromJson(data,${resultType.substring(6, resultType.length - 1)}.fromJson);`

      } else {
        return `return ${resultType}.fromJson(data);`
      }
    } else {
      return;
    }
  }

  const fromJsonStr = ` fromJson: (data) {
     ${rfromJson()}
  },`

  let isFile = false;


  let fileStr = ""



  if (urlParams.find(e => e[0] == "XFile")) {
    console.log(diourlParam);
    isFile = true

    fileStr = `
    FormData formData = FormData.fromMap({ 
      ${diourlParam.replace(`"file":file`, ` "file":file != null ? await MultipartFile.fromFile(file.path) : null,`)}
      ${params ? "...params.toJson()" : ''}
      ${dioData ? "...data.toJson()" : ''} 
    });
    `
    diourlParam = "";
  }

  let isResultList = false;
  if (resultType?.substring(0, 4) === "List") {
    isResultList = true;

  }
  return `
  /// ${summary}
  Future<${resultType ? resultType + (isResultList ? '' : "?") : 'bool'}> ${getCamelCase(name)}(${listParams.length > 0 ? `{ ${listParams}}` : ""}) async {
    ${fileStr}
    var res = await DioUtil.instance.request<${resultType ?? "void"}>("${url}",
        method: DioMethod.${dioMethod} ,params:{${diourlParam}} ${isFile ? ',data: formData' : dioData ? ',data:data.toJson()' : ''},
        ${rfromJson() ? fromJsonStr : ''}
       
        );
return res.${resultType ? 'result' : 'success'} ${isResultList ? '??[]' : ''};
  }\n`
}

// ${dioParam.length ? `,params:${dioParam}` : `${diourlParam.length ? `,params:${diourlParam}` : ''}`}
export const spliceApiFunc = (url, data, deprecated = false) => {
  let pageApiFunc = "";
  for (const key in data) {

    if (Object.hasOwnProperty.call(data, key)) {
      const element = data[key];

      pageApiFunc += spliceApiFuncResult(url, key, element, deprecated);
    }
  }
  return pageApiFunc;
};


const spliceApiFuncResult = (url, type, data, deprecated) => {
  const funcName = `${type}${url
    .replace(/\//g, "_")
    .replace(/\-/g, "_")
    .replace(/\${/g, "")
    .replace(/\}/g, "")
    .replace(/\{/g, "")
    } `;


  const apiUrl = url.replace(/\{/g, "$").replace(/\}/g, "");


  const params = schemaParamsType(data)


  if (!deprecated && data.deprecated) {
    return ""
  }

  /// 判断是否是导出接口 
  const resultType = (funcName.toLowerCase().includes("export") || data.summary?.includes("导出")) ? "ArrayBuffer" : spliceApiResultType(data.responses["200"]);



  const dot = params.find(e => e.name == "dot");
  const vo = params.find(e => e.name == "vo");
  const plist = params.filter(e => !["dot", "vo"].includes(e.name))?.map(e => [e.name, e.type]);

  /// 分页
  if (resultType?.substring(0, 5) === "IPage") {
    plist.push(["pageNum", "int"])
    plist.push(["pageSize", "int"])
  }
  return templatefn(funcName, data?.summary, apiUrl.replace(/\${/g, "${"), type, resultType, plist, dot?.type, vo?.type,);
};

/**
 * 接口参数
 * @param {*} data 
 * @returns 
 */
export const schemaParamsType = (data) => {
  const params = [];


  data.parameters?.forEach(element => {
    if (element.schema['$ref']) {
      const schema = element.schema['$ref'].split("/");
      params.push({ name: "dot", type: schema[schema.length - 1] })
    } else {
      params.push({
        name: element.name,
        type: integerFc({ type: element.schema.type, format: element.schema.format }, true)
      })
    }
  });
  if (data.requestBody) {
    /// 上传文件参数
    if (data.requestBody.content["application/json"].schema["$ref"]) {
      const schema = data.requestBody.content["application/json"].schema['$ref'].split("/");
      params.push({ name: "vo", type: schema[schema.length - 1] })
    } else {
      params.push({
        name: "file",
        type: "XFile"
      })
    }


  }

  return params
};


/**
 * 返回参数
 * @param {*} data 
 * @returns 
 */
export const spliceApiResultType = (data) => {
  if (!data.content) return;
  const schema = data.content['*/*'].schema['$ref']?.split("/")

  if (data.content['*/*'].schema?.type) {
    if (data.content['*/*'].schema?.type == "object") {
      return "any";
    }
    const schema = data.content['*/*'].schema.items['$ref']?.split("/") ?? data.content['*/*'].schema.items
    if (schema.format == "byte") {
      return "ArrayBuffer"
    }
    const types = schema[schema.length - 1]
    if (data.content['*/*'].schema?.type == "array") {

      return `List<${types}>`;
    }
  }

  const types = schema[schema.length - 1]


  if (types[0] != "R") {
    return types
  }


  if (types.substring(1, 5) == "Long") {
    return "String"
  }


  if (types.substring(1, 10) == "MapString") {
    const str = types.substring(10);
    if (str.substring(0, 4) == "List") {
      return `MapString<${str.substring(4)}[]>`
    }

    return `MapString<${types.substring(10)}>`
  }


  if (types.substring(1, 4) == "Map") {

  }
  if (types.substring(1, 13) == "MapLocalDate") {
    return `MapString<${types.substring(13)}>`
  }

  /// 没有返回参数的
  if (types.substring(1) == "Void") {
    return
  }
  if (types.substring(1) == "Int" || types.substring(1) == "Integer") {
    return "int"
  }
  /// 返回 List 参数的
  if (types.substring(1, 5) == "List") {
    if (['Long', "LocalDate"].includes(types.substring(5))) {
      return "List<String>";
    }

    return `List<${types.substring(5)}>`;
  }

  if (types.substring(1, 6) == "IPage") {
    return `IPage<${types.substring(6)}>`;
  }

  if (types.substring(1) == "Boolean") {
    return "bool"
  }
  return types.substring(1);
};

// ${typOjb[key].map((e) => `${e.key}:${e.value};\n`).join("")}
export const spliceDefinitionsType = (keyname, data) => {
  const listD = [];


  for (const key in data.properties) {
    if (Object.hasOwnProperty.call(data.properties, key)) {
      const element = data.properties[key];

      if (keyname.substring(0, 5) == "IPage" && key == "records") {


        listD.push({
          key: key,
          value: keyname.substring(5),
          description: element.description,
        });
      } else {
        if (element?.enum?.length == 2) {
          // console.log(element);
          // console.log(keyname, key);
        }
        listD.push({
          key: key,
          value: integerFc(element, keyname.substring(keyname.length - 3, keyname.length) == "Dto"),
          description: element.description,
        });
      }



    }
  }


  return ` 
    class ${keyname}{
    ${listD
      .map(
        (e) => {
          return ` ${e.description ? `/// ${e?.description} \n` : ""} ${e.description?.includes("枚举") ? 'int' : e.value}? ${e.key};\n`
        }
      )
      .join("")} 
      
      Map<String, dynamic> toJson() {
        final Map<String, dynamic> data = <String, dynamic>{};
        ${listD
      .map(
        (e) => {

          if (['int', "bool", 'String', "dynamic"].includes(e.value)) {
            return `data['${e.key}'] = ${e.key};`
          } else if (e.value.substring(0, 4) == "List") {
            if (['List<int>', "List<bool>", 'List<String>'].includes(e.value)) {
              return `data['${e.key}'] = ${e.key};`
            } else {
              return `
                if (${e.key} != null) {
                  data['e.key'] =  ${e.key}?.map((v) => v.toJson()).toList();
                }
                `
            }
          } else {

            return `data['${e.key}'] =  ${e.key}?.toJson();`
          }

        }
      )
      .join("\n")} 
        return data;
      }

      ${keyname}(
        { 
          ${listD
      .map(
        (e) => `this.${e.key}`
      )
      .join(",\n")}});



       

      ${keyname}.fromJson(Map<String, dynamic> json) {

        ${listD
      .map(
        (e) => {

          if (['int', "bool", 'String', "dynamic"].includes(e.value)) {
            return `${e.key}=json['${e.key}'];`
          } else if (e.value.substring(0, 4) == "List") {
            if (['List<int>', "List<bool>", 'List<String>'].includes(e.value)) {

              let t = e.value.substring(5, e.value.length - 1);
              return `${e.key}=json['${e.key}']?.cast<${t}>();`
            } else {
              let t = e.value.substring(5, e.value.length - 1);
              return ` 
                if (json['${e.key}'] != null) {
                  ${e.key} =[];
                  json['${e.key}'].forEach((v) {
                    ${e.key}?.add(${t}.fromJson(v)); 
                  });
                }
                `
            }
          } else {

            return `
            if (json['${e.key}'] != null) {
              ${e.key} = ${e.value}.fromJson(json['${e.key}']);
            }`
          }

        }
      )
      .join("\n")}
         
      }

    }`;
};

const integerFc = (element, isDot) => {
  let type = element.type;
  const format = element.format;
  const items = element.items;
  const refstr = element['$ref']



  if (element.enum) {

    if (!isDot && element.enum.length == 2) {
      // console.log(element);
    }
    type = isDot ? "int" : "MsgType"
  }

  if (['int', 'integer'].includes(type)) {
    type = format == "int64" ? "String" : "int";
  }
  if (type == "file") type = "File"

  if (type == "array" && items) {

    let fx = "String";

    if (['int', 'integer'].includes(items.type)) {
      fx = items.format == "int64" ? "String" : "int";
    }
    if (items["$ref"]) {
      const ref = (items["$ref"]).split("/")
      type = `List<${ref[ref.length - 1]}>`
    } else {
      type = `List<${fx}>`
    }


  }
  if (type == "array" && !items) {
    type = "List<String>"
  }

  if (["long"].includes(type)) {
    type = "String"
  }

  if (refstr) {
    const ref = refstr.split("/")
    if (ref[ref.length - 1] == "LocalTime") {
      type = "String"
    }
    type = `${ref[ref.length - 1]}`
  }
  if (type == "object") {

    type = "dynamic"
  }


  if (type == "string" || type == "LocalTime") {
    type = "String";
  }
  if (type == "boolean" || type == "Boolean") {
    type = "bool";
  }

  if (type == "number") {
    type = "int";
  }


  // console.log(format);
  // console.log(type);
  if (format == "binary") {
    type = "XFile"
  }
  return type;
};

