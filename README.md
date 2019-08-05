# 一个快速生成自己 npm 包的懒人模版 [![Build Status](https://www.travis-ci.org/funky-tiger/npm-plugin-template.svg?branch=master)](https://www.travis-ci.org/funky-tiger/npm-plugin-template)

### 介绍

- 基于 ts 搭建的用于将项目封装的插件发布 npm 的模版。
- 其内置了静态服务 测试用例 和 持续集成。
- 先进行本地开发，确认功能和测试全部通过后再发布到 npm。

### 目录相关

- doc 相关文档
- example 本地开发相关目录 本地开发测试的目录。 注：其中引用的组件来自于根目录的 src 中的组件
- src 编写将要发布的插件目录 注：该目录用于编写将要发布的组件
- lib 最终打包后的目录，用于发布到 npm

### 相关命令

- npm run start 启动本地服务开发
- npm run build 是根据根目录的 tsconfig.json 文件来执行 tsx 解析并最终打包到根目录的 lib/文件夹内
- npm run lint 运行 tslint 检测代码格式问题
- npm run test 运行 Jest 进行代码测试 测试用例在/src/test/目录中 以 xxx.test.tsx 命名
- npm login 登录 npm（没有的话就去注册一个）
- npm publish 推送的代码到 npm

### 使用方法

> git clone 到本地

> npm i 安装依赖项

> npm start 起本地服务

> 在 src/component 中编写你的代码/插件

> code 完毕并测试通过后执行命令 npm run build 将代码编译至 lib 目录下

> 修改 package.json 版本号/描述/作者...等等

> npm publish 相关操作

> 给个 star❤️ ～

> ok.

### package.json 中相关字段

- homepage
  > 指定项目的主页地址，如果没有一般可以使用项目的 GitHub 地址。
- bugs.url
  > 指定项目的 Bug 反馈地址，一般可以用项目的 GitHub Issue 地址。
- repository.url 和 repository.type
  > 指定项目的源码仓库地址，可以指定是 git/cvs/svn。
- main
  > 指定 Node.js 中 require("moduel-name") 导入的默认文件。
- keywords
  > 指定项目的关键词，合理设置有利于让他人发现你的项目。
- engines
  > 设置项目对引擎的版本要求，比如 node、electron、vscode 等。
- types 和 typings
  > 设置项目内置的 TypeScript 模块声明文件入口文件。

### homepage

- https://github.com/funky-tiger/npm-plugin-template

### issues

- https://github.com/funky-tiger/npm-plugin-template/issues
