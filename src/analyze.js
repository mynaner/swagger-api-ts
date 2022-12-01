/*
 * @Date: 2022-10-19 11:07:26
 * @LastEditors: dengxin 994386508@qq.com
 * @LastEditTime: 2022-12-01 16:51:58
 * @FilePath: /kll_admin_react/swagger/analyze.js
 */
import { spliceApiFunc, spliceDefinitionsType } from "./splice.js";
import fs from "fs-extra";

export const analyzeJson = (jsondata, pathUrl) => {

  if (!jsondata.paths) return;
  let fileName;
  let page = "";
  for (const key in jsondata.paths) {
    if (Object.hasOwnProperty.call(jsondata.paths, key)) {
      const element = jsondata.paths[key];
      if (!fileName) {
        fileName = key.split("/")[1];

      }
      page += spliceApiFunc(key, element);
    }
  }

  for (const key in jsondata.definitions) {
    if (Object.hasOwnProperty.call(jsondata.definitions, key)) {
      const element = jsondata.definitions[key];
      if (!key.includes("«")) {
        page += spliceDefinitionsType(key, element);
      }
    }
  }
  saveFile(page, "index", pathUrl);
};

const saveFile = async (pageStr, fileName, pathUrl) => {
  let url = `${pathUrl}${fileName}`;


  let page = `
  import { IPage,Paging } from "@/types/index";\n
  import { server ,download} from "@/utils/axios/request"; \n
   ${pageStr} 
  `;

  try {
    const res = await fs.exists(url + "/index.ts")
    if (res) {
      fs.appendFile(`${pathUrl}${fileName}/index.ts`, pageStr)
    } else {
      fs.emptyDirSync(`${pathUrl}${fileName}`);
      fs.writeFileSync(`${pathUrl}${fileName}/index.ts`, page);
    }
  } catch (e) {
    console.error(e);
  }


  console.log(`已生成文件:${pathUrl}${fileName}/index.ts`);
};
