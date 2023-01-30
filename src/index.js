#!/usr/bin/env node
import { analyzeJson } from "./analyze.js";
import http from "http";
import fs from "fs-extra";

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
const { url: Base_url, suffix: Base_url_suffix, path: Base_path } = config;

if (!Base_url) {
  throw ("url 不能为空")
}
if (!Base_url_suffix) {
  throw ("suffix 不能为空")
}

const pathUrl = process.env.PWD + `/${(Base_path ?? "src/api")}/`;
http.get(Base_url + '/' + Base_url_suffix + '/v3/api-docs/swagger-config', function (res) {

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
    json.urls.forEach((element) => {
      getOhterUrls(element.url);
    });
  });
});

const getOhterUrls = (url) => {
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
