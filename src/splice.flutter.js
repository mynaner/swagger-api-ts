
/*
 * @Date: 2022-10-19 11:07:47
 * @LastEditors: dengxin 994386508@qq.com
 * @LastEditTime: 2023-09-25 10:05:11
 * @FilePath: /swaggerapits/src/splice.flutter.js
 */
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
    .replace(/\{/g, "")}`;

  const apiUrl = url.replace(/\{/g, "${");


  const params = schemaParamsType(data)

  if (!deprecated && data.deprecated) {
    return ""
  }

  /// 判断是否是导出接口 
  const resultType = (funcName.toLowerCase().includes("export") || data.summary?.includes("导出")) ? "Blob" : spliceApiResultType(data.responses["200"]);


  const paramsList = params;

  const paramsInterface = () => {

    if (paramsList.length > 0) {

      let isExtends = params?.filter((e) => e.name == "vo" || e.name == "dot").map(e => e.type).join(",")

      if (isExtends) {
        isExtends = "extends " + isExtends
      }
      if (data.summary?.includes("分页")) {
        if (isExtends) {
          isExtends = isExtends + ",Paging"
        } else {
          isExtends = "extends Paging"
        }
      }
      return `export interface ${funcName.split("_").map(e => titleCase(e)).join("")}  ${isExtends} {
        ${params?.filter((e) => !(e.name == "vo" || e.name == "dot")).map((e) => {
        if (e.name) {
          return e.name + `?:` + e.type + ";"
        }
      }).join("")}
      ${params.find(e => e.type == "File") ? '[key:string]:any' : ''}
      }`

    } else {
      if (data.summary?.includes("分页")) {
        return `export interface ${funcName.split("_").map(e => titleCase(e)).join("")} extends Paging{}`
      }

    }
    return ""

  }
  /// 文件类型 formdata
  let havFileStr = ""
  const havFile = paramsList?.find(e => e.type == "File")
  if (havFile) {

    havFileStr = ` 
      const formdata = new FormData();
      for (const key in params) {
        if (Object.prototype.hasOwnProperty.call(params, key)) {
          const element = params[key];
          formdata.set(key, element);
        }
      }
      `
  }



  const axiosConfig = () => {

    if (params.length == 0 && data.summary?.includes("分页")) {
      return ' {params}';
    }
    if (!params.length) return "";
    if (havFileStr != "") return "{data:formdata}";
    const d = params.find(e => e.name == "vo");
    const p = paramsList.filter(e => e.name != "vo");


    let str = [];
    if (d) str.push("data")
    if (p.length) str.push("params")
    if (data.summary?.includes("excel导出")) str.push("responseType: 'arraybuffer'")
    return `{${str.join(',')}}`;
  }

  const paramsD = () => {

    if (params.length == 0 && !data.summary?.includes("分页")) return "";

    let str = ""
    const d = params.find(e => e.name == "vo");
    const p = paramsList.filter(e => e.name != "vo");
    if (d) {
      str += `data:${d.type},`
    }
    if (p.length || data.summary?.includes("分页")) {

      str += `params:${funcName.split("_").map(e => titleCase(e)).join("")}`
    }
    return str;
  }

  return `
   ${paramsInterface()}
  /** 
   * @description:  ${data.summary}
   ${paramsD().split(",").map(e => {

    const str = e.split(":");
    if (str.length == 2 && str[0] != "") {
      return `* @param {${str[1]}} ${str[0]}`
    }
    return " "
  })} 
   * @return {*}
   */
  export const ${funcName} = async(${paramsD()}) => {

    ${havFileStr}
    

  const res = await server.${type.toUpperCase()
    }${resultType ? `<${resultType}>` : ""} (\`${apiUrl.replace(/\${/g, "${params.")}\`,${axiosConfig()} );

        ${resultType === 'Blob' ? `
        if (res instanceof Blob) {
          return res as Blob;
        } else {
          return null;
        }
        ` : `return res?.${resultType ? `result${resultType.substring(resultType.length - 2) == '[]' ? '??[]' : ''}` : "success"}; `}
        }
    `;
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
        type: "File"
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
    const schema = data.content['*/*'].schema.items['$ref']?.split("/")
    const types = schema[schema.length - 1]
    if (data.content['*/*'].schema?.type == "array") {
      return `${types}[]`;
    }
  }

  const types = schema[schema.length - 1]


  if (types[0] != "R") {
    return types
  }


  if (types.substring(1, 5) == "Long") {
    return "string"
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
    return "number"
  }
  /// 返回 List 参数的
  if (types.substring(1, 5) == "List") {
    if (types.substring(5) == 'Long') {
      return "string[]";
    }
    return `${types.substring(5)}[]`;
  }

  if (types.substring(1, 6) == "IPage") {
    return `IPage<${types.substring(6)}>`;
  }


  return types.substring(1);
};

// ${typOjb[key].map((e) => `${e.key}:${e.value};\n`).join("")}
export const spliceDefinitionsType = (keyname, data) => {
  const listD = [];

  for (const key in data.properties) {
    if (Object.hasOwnProperty.call(data.properties, key)) {
      const element = data.properties[key];
      listD.push({
        key: key,
        value: integerFc(element, keyname.substring(keyname.length - 3, keyname.length) == "Dto"),
        description: element.description,
      });

    }
  }
  return ` 
    export interface ${keyname}{
    ${listD
      .map(
        (e) => {
          return ` ${e.description ? `/** ${e?.description} */\n` : ""} ${e.key}?:${e.description?.includes("枚举") ? 'number' : e.value};\n`
        }
      )
      .join("")}
    }`;
};

const integerFc = (element, isDot) => {

  const type = element.type;
  const format = element.format;
  const items = element.items;
  const refstr = element['$ref']


  if (element.enum) {
    return isDot ? "number" : "MsgType"
  }

  if (['int', 'integer'].includes(type)) {
    return format == "int64" ? "string" : "number";
  }
  if (type == "file") return "File"

  if (type == "array" && items) {

    let fx = "string";

    if (['int', 'integer'].includes(items.type)) {
      fx = items.format == "int64" ? "string" : "number";
    }
    if (items["$ref"]) {
      const ref = (items["$ref"]).split("/")
      return `${ref[ref.length - 1]}[]`
    }

    return `string[]`
  }
  if (type == "array" && !items) {
    return "string[]"
  }

  if (["long"].includes(type)) {
    return "string"
  }

  if (refstr) {
    const ref = refstr.split("/")
    if (ref[ref.length - 1] == "LocalTime") {
      return "string"
    }
    return `${ref[ref.length - 1]}`
  }
  return type;
};


function titleCase(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();

}
