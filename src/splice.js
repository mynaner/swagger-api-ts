
import { log } from "console";
import { Tools } from "./tools.js";
import { type } from "os";


/*
 * @Date: 2022-10-19 11:07:47
 * @LastEditors: dengxin 994386508@qq.com
 * @LastEditTime: 2024-08-06 15:39:04
 * @FilePath: /swaggerapits/src/splice.js
 */
export const spliceApiFunc = (url, data,) => {
  let pageApiFunc = "";
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      if (["POST", "GET", "DELETE", "PUT"].includes(key.toUpperCase())) {
        const element = data[key];
        pageApiFunc += spliceApiFuncResult(url, key, element,);
      }
    }
  }
  return pageApiFunc;
};


const spliceApiFuncResult = (url, type, data,) => {


  const funcName = `${type}${url
    .replace(/\//g, "_")
    .replace(/\-/g, "_")
    .replace(/\${/g, "")
    .replace(/\}/g, "")
    .replace(/\{/g, "")}`;

  const apiUrl = url.replace(/\{/g, "${");


  const params = schemaParamsType(data)
  const config = Tools.getConfig();
  if (!config.deprecated && data.deprecated) {
    return ""
  }


  /// 判断是否是导出接口 
  const resultType = (funcName.substring(funcName.length - 6).toLowerCase().includes("export") || data.summary?.includes("导出")) ? "ArrayBuffer" : spliceApiResultType(data.responses["200"]);

  const isPaging = resultType?.substring(0, 5) == "IPage";

  const paramsList = params;

  const paramsInterface = () => {



    if (paramsList.length > 0) {

      let isExtends = params?.filter((e) => e.name == "vo" || e.name == "dot").map(e => e.type).join(",")




      if (isExtends == "string[]" | (isExtends && paramsList.length == 1 && !isPaging)) {
        return ""
      }


      if (isExtends) {
        isExtends = "extends " + isExtends
      }

      if (isPaging) {
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
    const strList = [];
    if (havFileStr != '') strList.push("data:formdata")
    const d = params.find(e => e.name == "vo");
    const p = paramsList.filter(e => e.name != "vo");
    if (d) strList.push("data")
    if (havFileStr == '' && (p.length | isPaging)) strList.push("params")
    if (resultType == "ArrayBuffer") {
      strList.push("responseType: 'arraybuffer'")
    }
    if (strList.length) {
      return `{${strList.join(',')}}`;
    } else {
      return ""
    }
  }

  const paramsD = () => {

    if (isPaging && params.length == 0) {

    }
    if (params.length == 0 && !isPaging) return "";

    let str = []
    const d = params.find(e => e.name == "vo");
    const p = paramsList.filter(e => e.name != "vo");


    if (p.length == 0 && isPaging) {
      str.push("params?:Paging")
    } else if (p.length || isPaging) {

      if (p.length == 1 && p.find(e => e.name == "dot") && !isPaging) {

        str.push(`params?:${p.find(e => e.name == "dot").type}`)
      } else {
        str.push(`params?:${funcName.split("_").map(e => titleCase(e)).join("")}`)
      }



    }
    if (d) {

      str.push(`data?:${d.type}`)
    }

    return str.join(",");
  }

  return `
   ${paramsInterface()}
  /** ${config.deprecated && data.deprecated ? '\n   * @deprecated 将于下个版本被弃用' : ''}
   * @description:  ${data.summary}${paramsD().split(",").map(e => {
    const str = e.split(":");
    if (str.length == 2 && str[0] != "") {
      return `\n   * @param {${str[1]}} ${str[0]}`
    }
    return ""
  })} 
   * @return {*}
   */
  export const ${funcName} = async(${paramsD()}) => {
    ${havFileStr}
  const res = await server.${type.toUpperCase()
    }${resultType ? `<${resultType}>` : ""} (\`${apiUrl.replace(/\${/g, "${params?.")}\`,${axiosConfig()} );

        ${resultType === 'ArrayBuffer' ? `
        if (res instanceof ArrayBuffer) {
          return res as ArrayBuffer;
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
    /// 
    if (data.requestBody.content["application/json"].schema["$ref"]) {
      const schema = data.requestBody.content["application/json"].schema['$ref'].split("/");

      let type = schema[schema.length - 1];
      if (type == "LongList") {
        type = "string[]";
      }
      params.push({ name: "vo", type: type })
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

    const schema = data.content['*/*'].schema.items?.['$ref']?.split("/") ?? data.content['*/*'].schema?.items ?? data.content['*/*'].schema


    if (schema.format == "byte") {
      return "ArrayBuffer"
    }
    const types = schema[schema.length - 1]
    if (data.content['*/*'].schema?.type == "array") {

      return `${types}[]`;
    }


  }

  const types = schema[schema.length - 1]




  if (types[0] != "R") {
    return types
  }


  if (types.substring(1) == "Long" || types.substring(1) == "String") {
    return "string"
  }


  if (types.substring(1, 10) == "MapString") {
    let str = types.substring(10);


    if (str.substring(0, 4) == "List") {
      str = `${str.substring(4)}[]`
    }
    if (str.substring(0, 3) == "Set") {
      str = `${str.substring(3)}[]`
    }
    return `{[key:string]:${str}}`
  }


  if (types.substring(1, 4) == "Map") {


    return `{[key:string]:any}`
  }
  if (types.substring(1, 13) == "MapLocalDate") {
    return `{[key:string]:${types.substring(13)}}`
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
    const type = types.substring(5);
    if (type == 'Long' || type == 'String') {
      return "string[]";
    }
    if (type.substring(0, 9) == "MapString") {
      let str = type.substring(9);

      console.log(str);
      if (str.substring(0, 4) == "List") {
        str = `${str.substring(4)}[]`
      }
      if (str.substring(0, 3) == "Set") {
        str = `${str.substring(3)}[]`
      }
      return `{[key:string]:${str}}`
    }

    if ("DztccCarType" == type) {
      return "MsgType[]"
    }

    return `${type}[]`;
  }

  if (types.substring(1, 6) == "IPage") {
    return `IPage<${types.substring(6)}>`;
  }
  if (types.substring(1) == "SetString") {
    return "string[]";
  }
  if (types.substring(1) == "Boolean") {
    return "boolean";
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
        value: integerFc(element, keyname.substring(keyname.length - 3) == "Dto"),
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

  if (element.additionalProperties) {

    let type = integerFc(element.additionalProperties);

    if (element.additionalProperties?.properties?.andIncrement) {
      type = 'number'
    }
    return `{[key:string]:${type}}`;
  }

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

    return `${fx}[]`
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
