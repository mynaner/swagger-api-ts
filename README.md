<!--
 * @Date: 2022-10-11 11:00:49
 * @LastEditors: dengxin 994386508@qq.com
 * @LastEditTime: 2023-09-25 10:29:43
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
