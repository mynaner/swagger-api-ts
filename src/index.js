#!/usr/bin/env node
import { analyzeJson } from "./analyze.js";
import http from "http";
import fs from "fs-extra";
import { Tools } from "./tools.js";
console.info("读取配置文件...");
const config = Tools.getConfig();
console.info(config);
const { url: Base_url, suffix: Base_url_suffix, output: Base_output } = config;
const pathUrl = process.env.PWD + `/${Base_output ?? "src/api"}/`;
console.log(Base_url + (Base_url_suffix ?? "") + "/v3/api-docs/swagger-config");
http.get(
  Base_url + (Base_url_suffix ?? "") + "/v3/api-docs/swagger-config",
  function (res) {
    // 分段返回的 自己拼接
    let html = "";
    // 有数据产生的时候 拼接
    res.on("data", function (chunk) {
      html += chunk;
    });
    // 拼接完成
    res.on("end", function () {
      fs.emptyDirSync(`${pathUrl}`);
      const json = JSON.parse(html);
      if (json.urls) {
        json.urls.forEach((element) => {
          getOhterUrls(element.url);
        });
      } else if (json.url) {
        getOhterUrls(json.url);
      } else {
        console.log(json);
        throw "没有地址";
      }
    });
  }
);

const getOhterUrls = (url) => {
  console.log(Base_url + url);
  http.get(Base_url + url, function (res) {
    // 分段返回的 自己拼接
    let html = "";
    // 有数据产生的时候 拼接
    res.on("data", function (chunk) {
      html += chunk;
    });
    // 拼接完成
    res.on("end", function () {
      analyzeJson(JSON.parse(html), pathUrl);
    });
  });
};

// http://tcc.yzt66.com:9999/share-app/v3/api-docs/%E7%94%A8%E6%88%B7%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%90%8E%E5%8F%B0
// http://tcc.yzt66.com:9999/share-app/share-app/v3/api-docs/用户小程序后台
