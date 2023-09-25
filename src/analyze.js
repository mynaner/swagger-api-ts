/*
 * @Date: 2022-10-19 11:07:26
 * @LastEditors: dengxin 994386508@qq.com
 * @LastEditTime: 2022-12-01 16:51:58
 * @FilePath: /kll_admin_react/swagger/analyze.js
 */
import { spliceApiFunc, spliceDefinitionsType } from "./splice.js";
import flutterSplice from "./splice.flutter.js";

import fs from "fs-extra";

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
      if (config?.language == 'flutter') {

        page += flutterSplice.spliceApiFunc(key, element, config.deprecated);
      } else {
        page += spliceApiFunc(key, element, config.deprecated);
      }

    }
  }
  for (const key in jsondata.components.schemas) {

    if (Object.hasOwnProperty.call(jsondata.components.schemas, key)) {
      const element = jsondata.components.schemas[key];
      if (key.substring(1, 2).charCodeAt() > 65 && (key.substring(1, 2).charCodeAt() < 90)) {

      } else if (key.substring(0, 5) != "IPage" && !["LocalTime"].includes(key)) {
        if (config?.language == 'flutter') {

          page += flutterSplice.spliceDefinitionsType(key, element);
        } else {
          page += spliceDefinitionsType(key, element);
        }


      }
    }
  }

  saveFile(page, "index", pathUrl, config);
};

const saveFile = async (pageStr, fileName, pathUrl, config) => {
  let url = `${pathUrl}${fileName}`;
  let fileSuffix = 'ts';
  let page = `
  import { ${(config?.import_types ?? []).join(",")} } from "${config?.type_file ?? '@/types/index'}";\n
  import { server, ${(config?.import_other_server ?? []).join(",")}} from "${config?.server_file ?? '@/utils/axios/request'}"; \n
   ${pageStr} 
  `;
  if (config?.language == 'flutter') {
    fileSuffix = 'dart';

    page = ` ${config?.header} \n
     ${pageStr} 
    `;
  }


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
