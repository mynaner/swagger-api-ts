/*
 * @Date: 2023-10-30 15:16:21
 * @LastEditors: dengxin 994386508@qq.com
 * @LastEditTime: 2023-10-31 15:45:04
 * @FilePath: /swaggerapits/src/tools.js
 */
import fs from "fs-extra";
export class Tools {
  static getNodeParams = (strs = []) => {
    var s = strs.filter((e) => e.includes("=") && e.split("--")[0] == "");
    const data = {};
    s.forEach((e) => {
      const res = e.split("--")[1].split("=");
      data[res[0]] = res[1];
    });
    return data;
  };

  static getConfig = () => {
    const fileName = this.getNodeParams(process.argv).file;
    const configFile = fs.readFileSync(
      process.env.PWD + `/swagger${fileName ? "." + fileName : ""}.json`,
      "utf8"
    );
    const config = JSON.parse(configFile);
    if (!config) {
      throw "配置文件错误";
    }

    const { url, output } = config;

    if (!url) {
      throw "url 不能为空";
    }

    if (!output) {
      throw "output 不能为空";
    }
    return config;
  };
}
