/*
 * @Date: 2022-10-19 11:07:26
 * @LastEditors: dengxin 994386508@qq.com
 * @LastEditTime: 2023-10-07 17:54:54
 * @FilePath: /swaggerapits/src/analyze.js
 */
import { spliceApiFunc, spliceDefinitionsType } from "./splice.js";
import { spliceApiFunc as FspliceApiFunc, spliceDefinitionsType as FspliceDefinitionsType } from "./splice.flutter.js";

import fs from "fs-extra";
import { log } from "console";

export const analyzeJson = (jsondata, pathUrl, config) => {

  if (!jsondata.paths) return;
  let fileName;
  let page = "";
  for (const key in jsondata.paths) {
    if (Object.hasOwnProperty.call(jsondata.paths, key)) {
      const element = jsondata.paths[key];
      if (!fileName) {
        fileName = key.split("/")[1];
      }

      if (![...(config?.filter ?? [])].includes(key)) {
        if (config?.language == 'flutter') {

          page += FspliceApiFunc(key, element, config.deprecated);
        } else {
          page += spliceApiFunc(key, element, config.deprecated);
        }
      }


    }
  }
  for (const key in jsondata.components.schemas) {

    if (Object.hasOwnProperty.call(jsondata.components.schemas, key)) {
      const element = jsondata.components.schemas[key];
      // console.log("key", key)
      // console.log("key", key);
      if (key.substring(1, 2).charCodeAt() > 65 && (key.substring(1, 2).charCodeAt() < 90)) {

        // console.log("key", key.substring(1, 2));
        // console.log("key", key.substring(1, 2).charCodeAt());
        if (key.substring(0, 5) == "IPage") {
          // console.log("key1", key, element)
          page += FspliceDefinitionsType(key, element);
        }
      } else if (!["LocalTime"].includes(key)) {

        if (config?.language == 'flutter') {

          page += FspliceDefinitionsType(key, element);
        } else {
          page += spliceDefinitionsType(key, element);
        }


      } else {
        // console.log("key", key);
      }
    }
  }

  saveFile(page, "index", pathUrl, config);
};

const saveFile = async (pageStr, fileName, pathUrl, config) => {
  let url = `${pathUrl}${fileName}`;
  let fileSuffix = config?.language == 'flutter' ? 'dart' : 'ts';
  let page = `${config?.header.join("\n")} \n
              ${pageStr} 
              `;


  try {
    const res = await fs.exists(url + `/index.${fileSuffix}`)
    if (res) {
      fs.appendFile(`${pathUrl}${fileName}/index.${fileSuffix}`, pageStr)
    } else {
      fs.emptyDirSync(`${pathUrl}${fileName}`);
      fs.writeFileSync(`${pathUrl}${fileName}/index.${fileSuffix}`, page);
    }
  } catch (e) {
    console.error(e);
  }


  console.log(`已生成文件:${pathUrl}${fileName}/index.${fileSuffix}`);
};
