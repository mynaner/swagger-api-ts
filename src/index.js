#!/usr/bin/env node
import { analyzeJson } from "./analyze.js";
import http from "http";
import fs from "fs-extra";

const getNodeParams = (strs = []) => {
  var s = strs.filter(e => (e.includes("=") && (e.split("--")[0] == "")));
  const data = {}
  s.forEach(e => {
    const res = e.split("--")[1].split("=");
    data[res[0]] = res[1]
  })
  return data;
}

const Base_url = getNodeParams(process.argv).url;
const pathUrl = process.env.PWD + `/${(getNodeParams(process.argv).path ?? "src/api")}/`;
http.get(Base_url + "/swagger-resources", function (res) {

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
    // getOhterUrls(json[1].url); 
    json.forEach((element) => {
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
      analyzeJson(JSON.parse(html), pathUrl);
    });
  });
};
