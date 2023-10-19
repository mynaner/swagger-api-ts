<!--
 * @Date: 2022-10-11 11:00:49
 * @LastEditors: dengxin 994386508@qq.com
 * @LastEditTime: 2023-10-18 16:37:41
 * @FilePath: /swaggerapits/README.md
-->

<a href="https://www.npmjs.com/package/swagger-api-ts">
    <img src="https://img.shields.io/npm/v/swagger-api-ts.svg?style=flat-square">
  </a>

---

# swagger

### 本地发布

```
npm pack && sudo npm install swagger-api-ts-1.1.4.tgz -g
```

### 命令参数

```
swagger
```

### 线上发布

```
# 登录
npm login
# 发布
npm publish
```

配置文件

```json
{
  "url": "", // 接口地址
  "suffix": "", // 接口后缀
  "output": "src/api", // 输出地址 相对路径
  "language": "flutter", /// flutter | js  默认 js
  "deprecated": false, /// 是否加载弃用接口
  // 代码头部 数组 一般加载需要导入的东西
  "header": [
    "import 'package:zhtc_blue/tools/dio_util/dio_util.dart';",
    "import 'package:zhtc_blue/app/data/models/common_model.dart';"
  ],
  /// 过滤掉不需要的借口,或者在其他地方已经实现了的
  "filter": ["/common/oss/ali"]
}
```
