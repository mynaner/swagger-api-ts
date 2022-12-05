/*
 * @Date: 2022-10-19 11:07:47
 * @LastEditors: dengxin 994386508@qq.com
 * @LastEditTime: 2022-12-05 12:07:04
 * @FilePath: /swaggerapits/src/splice.js
 */
export const spliceApiFunc = (url, data) => {
  let pageApiFunc = "";
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      const element = data[key];
      pageApiFunc += spliceApiFuncResult(url, key, element);
    }
  }
  return pageApiFunc;
};


const spliceApiFuncResult = (url, type, data) => {
  const funcName = `${type}${url
    .replace(/\//g, "_")
    .replace(/\-/g, "_")
    .replace(/\${/g, "")
    .replace(/\}/g, "")
    .replace(/\{/g, "")}`;

  const apiUrl = url.replace(/\{/g, "${");

  const params = data.parameters?.map((element) => {
    return spliceApiParamsType(element);
  }) ?? [];
  const resultType = spliceApiResultType(data.responses["200"], funcName);
  const paramsList = params.filter(e => e.name != "dto");
  const paramsInterface = () => {

    if (paramsList.length > 0) {
      return `export interface ${funcName.split("_").map(e => titleCase(e)).join("")}  ${data.summary?.includes("分页") ? `extends Paging` : ''} {
        ${params?.map((e) => e.name + `?:` + e.type).join(";")}
        
      }`
    } else {
      if (data.summary?.includes("分页")) {
        return `export interface ${funcName.split("_").map(e => titleCase(e)).join("")} extends Paging {
          pageNum?: number;
          pageSize?: number;
        }`
      }
      return ""
    }

  }
  /// 文件类型 formdata
  let havFileStr = ""
  const havFile = paramsList?.find(e => e.type == "File")
  if (havFile) {

    havFileStr = `
      const formdata = new FormData()
      ${paramsList.map(e => (`if(params?.${e.name}){ 
        formdata.set("${e.name}",params.${e.name}+'')
      }`)).join(";")} ;
      `
  }



  const axiosConfig = () => {
    if (!params.length) return "";
    if (havFileStr != "") return "{data:formdata}";
    const d = params.find(e => e.name == "dto");
    const p = paramsList;
    let str = [];
    if (d) str.push("data")
    if (p.length) str.push("params")
    if (data.summary?.includes("excel导出")) str.push("responseType: 'arraybuffer'")
    return `{${str.join(',')}}`;
  }
  const paramsD = () => {
    if (params.length == 0 && !data.summary?.includes("分页")) return "";
    let str = ""
    const d = params.find(e => e.name == "dto");
    const p = paramsList;
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
    if (e.trim) {
      return `* @param {${e.split(':')[1]}} ${e.split(':')[0]}`
    }
    return ""
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



export const spliceApiParamsType = (data) => {
  let type = integerFc(data.type, data.format);
  return {
    name: data?.schema?.originalRef ? 'dto' : data.name,
    type: data?.schema?.originalRef ?? type,
    isData: Boolean(data?.schema),
    isRequired: data.required
  };
};

export const spliceApiResultType = (data, name) => {
  let d = data?.schema?.originalRef;
  if (d) {
    d = d
      ?.replace(/\»/g, "_")
      .replace(/\«/g, "_")
      .split("_")
      .filter((e) => e != "");
  } else {
    // 判断是不是导出接口
    if (name.includes("export")) {
      return "Blob";
    } else {
      return;
    }
  }
  if (d.length < 2 || d[0] != "R" || d.length > 3) {
    return;
  }

  if (d[1] == "long") {
    return "string";
  }
  if (d[1] == "int") {
    return "number";
  }
  if (d.length == 2 && d[1] != "Void") {
    return d[1];
  }

  if (d.length == 3) {

    if (["Array", "List"].includes(d[1])) {
      if (d[2] == "long") {
        return "string[]";
      }
      return `${d[2]}[]`;
    }
    if (["IPage"].includes(d[1])) {
      return `IPage<${d[2]}>`;
    }
  }
  return;
};

// ${typOjb[key].map((e) => `${e.key}:${e.value};\n`).join("")}
export const spliceDefinitionsType = (keyname, data) => {
  const listD = [];

  for (const key in data.properties) {
    if (Object.hasOwnProperty.call(data.properties, key)) {
      const element = data.properties[key];

      listD.push({
        key: key,
        value: element?.originalRef ?? integerFc(element.type, element.format, element.items),
        description: element.description,
      });
    }
  }

  return ` 
    
    export interface ${keyname}{
    ${listD
      .map(
        (e) =>
          ` ${e.description ? `/** ${e.description} */\n` : ""} ${e.key}?:${e.description?.includes("枚举") ? 'number' : e.value
          };\n`
      )
      .join("")}
    }`;
};

const integerFc = (type, format, items) => {
  if (['int', 'integer'].includes(type)) {
    return format == "int64" ? "string" : "number";
  }
  if (type == "file") {
    return "File"
  }

  if (type == "array" && items) {

    let fx = "string";

    if (['int', 'integer'].includes(items.type)) {
      fx = items.format == "int64" ? "string" : "number";
    }
    return `${items.originalRef ?? fx}[]`
  }
  if (type == "array" && !items) {
    return "string[]"
  }
  if (type == "long") {
    return "string"
  }

  return type;
};


function titleCase(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();

}
