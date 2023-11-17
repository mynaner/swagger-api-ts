/*
 * @Date: 2022-10-19 11:07:26
 * @LastEditors: dengxin 994386508@qq.com
 * @LastEditTime: 2023-11-17 15:42:24
 * @FilePath: /swaggerapits/src/analyze.js
 */
import { spliceApiFunc, spliceDefinitionsType } from "./splice.js";
import {
  spliceApiFunc as FspliceApiFunc,
  spliceDefinitionsType as FspliceDefinitionsType,
} from "./splice.flutter.js";

import fs from "fs-extra";
import { Tools } from "./tools.js";
import { FlutterOtherType, TsxOtherType } from "./const.js";

export const analyzeJson = (jsondata, pathUrl) => {
  if (!jsondata.paths) return;
  let fileName;
  let page = "";
  const config = Tools.getConfig();
  for (const key in jsondata.paths) {
    if (Object.hasOwnProperty.call(jsondata.paths, key)) {
      const element = jsondata.paths[key];
      if (!fileName) {
        fileName = key.split("/")[1];
      }

      if (![...(config?.filter ?? [])].includes(key)) {
        switch (config?.language) {
          case "flutter":
            page += FspliceApiFunc(key, element);
            break;
          default:
            page += spliceApiFunc(key, element);
            break;
        }
      }
    }
  }
  for (const key in jsondata.components.schemas) {
    if (Object.hasOwnProperty.call(jsondata.components.schemas, key)) {
      const element = jsondata.components.schemas[key];



      // console.log("key", key)
      // console.log("key", key);
      if (
        key.substring(1, 2).charCodeAt(0) > 65 &&
        key.substring(1, 2).charCodeAt(0) < 90
      ) {
        // console.log("key", key.substring(1, 2));
        // console.log("key", key.substring(1, 2).charCodeAt());
        // if (key.substring(0, 5) == "IPage" && config?.language == 'flutter') {
        //   // console.log("key1", key, element)
        //   page += FspliceDefinitionsType(key, element);
        // }

      } else if (!["LocalTime"].includes(key)) {
        switch (config?.language) {
          case "flutter":
            page += FspliceDefinitionsType(key, element);
            break;
          default:
            page += spliceDefinitionsType(key, element);
            break;
        }
      } else {
      }
    }
  }

  saveFile(page, "index", pathUrl);
};

const saveFile = async (pageStr, fileName, pathUrl) => {
  const config = Tools.getConfig();
  let url = `${pathUrl}${fileName}`;
  let fileSuffix = config?.language == "flutter" ? "dart" : "ts";
  let page = `${config?.header.join("\n")} \n


              ${config.language == "flutter" ? FlutterOtherType : TsxOtherType}
              ${pageStr} 
              `;

  try {
    const res = await fs.exists(url + `/index.${fileSuffix}`);

    if (res) {
      await fs.appendFile(`${pathUrl}${fileName}/index.${fileSuffix}`, pageStr);
    } else {
      await fs.emptyDirSync(`${pathUrl}${fileName}`);
      await fs.writeFileSync(`${pathUrl}${fileName}/index.${fileSuffix}`, page);
    }
  } catch (e) {
    console.error(e);
  }


};
