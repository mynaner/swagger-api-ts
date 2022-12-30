<!--
 * @Date: 2022-10-11 11:00:49
 * @LastEditors: dengxin 994386508@qq.com
 * @LastEditTime: 2022-12-05 11:30:52
 * @FilePath: /swaggerapits/README.md
-->

# swagger

### 本地发布

```
npm pack

sudo npm install swagger-api-ts-0.0.1.tgz -g
```

### 命令参数

```
swagger --url=http://xxxx:9999 --suffix=admin --path=src/api1


suffix 项目 必传
url  接口文档地址 必传
path 存入命令行当前文件下的路径
```

### 线上发布

```
# 登录
npm login
# 发布
npm publish
```
