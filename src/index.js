#!/usr/bin/env node
import { analyzeJson } from "./analyze.js";
import http from "http";
import fs from "fs-extra";
import { log } from "console";

console.info("读取配置文件...");
const getNodeParams = (strs = []) => {
  var s = strs.filter(e => (e.includes("=") && (e.split("--")[0] == "")));
  const data = {}
  s.forEach(e => {
    const res = e.split("--")[1].split("=");
    data[res[0]] = res[1]
  })
  return data;
}
const fileName = getNodeParams(process.argv).file;
const configFile = fs.readFileSync(process.env.PWD + `/swagger${fileName ? '.' + fileName : ''}.json`, 'utf8');
const config = JSON.parse(configFile);
if (!config) {
  throw ("配置文件错误")
}
console.info(config);
const { url: Base_url, suffix: Base_url_suffix, output: Base_output } = config;

if (!Base_url) {
  throw ("url 不能为空")
}

if (!Base_output) {
  throw ("output 不能为空")
}

const pathUrl = process.env.PWD + `/${(Base_output ?? "src/api")}/`;
console.log(Base_url + (Base_url_suffix ?? '') + '/v3/api-docs/swagger-config');
http.get((Base_url + (Base_url_suffix ?? '') + '/v3/api-docs/swagger-config'), function (res) {

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
      throw ("没有地址")
    }
  });
});

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

      analyzeJson(JSON.parse(html), pathUrl, config);
    });
  });
};

// http://tcc.yzt66.com:9999/share-app/v3/api-docs/%E7%94%A8%E6%88%B7%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%90%8E%E5%8F%B0
// http://tcc.yzt66.com:9999/share-app/share-app/v3/api-docs/用户小程序后台