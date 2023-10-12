<!--
 * @Date: 2022-10-11 11:00:49
 * @LastEditors: dengxin 994386508@qq.com
 * @LastEditTime: 2023-10-12 16:53:59
 * @FilePath: /swaggerapits/README.md
-->

# swagger

### 本地发布

```
npm pack

sudo npm install swagger-api-ts-1.1.2.tgz -g
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

### 0.0.4 加入 配置文件 swagger.json

```json
{
  "url": "", // 接口地址
  "suffix": "", // 接口后缀
  "path": "src/api", // 输出地址 相对路径
  "type_file": "@/types/common", // 导入类型文件
  "server_file": "@/utils/request", // 导入请求文件 必须是 server 方法请求
  "import_types": ["IPage", "Paging", "MsgType"], // 导入类型
  "import_other_server": [] // 导入请求文件其他方法
}
```

### 0.0.41 加入自定义配置文件

```
swagger --file=admin // 就可以读取  swagger.admin.json 文件的配置数据
```

### 1.0.0 正式发布

### 1.0.1

```
接口地址可能为 url 和 urls
spliceApiResultType 方法的 data.content 可能为空
```

### 1.0.2

> 对弃用接口配置 默认不加载弃用接口

```json
{
  "url": "", // 接口地址
  "suffix": "", // 接口后缀
  "path": "src/api", // 输出地址 相对路径
  "type_file": "@/types/common", // 导入类型文件
  "server_file": "@/utils/request", // 导入请求文件 必须是 server 方法请求
  "import_types": ["IPage", "Paging", "MsgType"], // 导入类型
  "import_other_server": [], // 导入请求文件其他方法
  "deprecated": false // // 是否加载弃用接口
}
```

> swagger --file=tcc

### 1.0.3

> 修改 bug 导出数据类型错误

> 新增 flutter 支持 (未完成)

### 1.1.0

> 新增 flutter 支持
> 移除 type_file server_file import_types import_other_server 字短

```json
{
  "url": "", // 接口地址
  "suffix": "", // 接口后缀
  "path": "src/api", // 输出地址 相对路径
  // "type_file": "@/types/common", // 导入类型文件 **弃用 请使用字短 header **
  // "server_file": "@/utils/request", // 导入请求文件 必须是 server 方法请求 **弃用 请使用字短 header **
  // "import_types": ["IPage", "Paging", "MsgType"], // 导入类型  // 导入请求文件 必须是 server 方法请求 **弃用 请使用字短 header **
  //  "import_other_server": [], // 导入请求文件其他方法
  "language": "flutter", /// 语言 flutter 默认 js
  "deprecated": false, /// 是否加载弃用接口
  // 代码头部 数组
  "header": [
    "import 'package:zhtc_blue/tools/dio_util/dio_util.dart';",
    "import 'package:zhtc_blue/app/data/models/common_model.dart';"
  ],
  /// 过滤掉不需要的借口,或者在其他地方已经实现了
  "filter": ["/common/oss/ali"]
}
```

### 1.1.1

> bug 修复

### 1.1.2

> 修复 flutter bug
> flutter 加入 IPage 的 固定外部类
> js 的分页不在根据注释进行判断 而是根据返回值 IPage

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
  /// 过滤掉不需要的借口,或者在其他地方已经实现了
  "filter": ["/common/oss/ali"]
}
```
