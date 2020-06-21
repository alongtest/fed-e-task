# 孙文龙 | Part2 | 模块一

## 简答题

### 1、谈谈你对工程化的初步认识，结合你之前遇到过的问题说出三个以上工程化能够解决问题或者带来的价值。
- ES6语法编译，兼容浏览器环境
- 模块化/组件化开发
- 减少重复的机械工作
- 代码风格统一、提交前保证代码质量
- 前后端分离，接口模拟测试。

### 2、你认为脚手架除了为我们创建项目结构，还有什么更深的意义？

- 最核心的功能都是能够快速搭建一个完整的项目的结构，减少时间，不必从零开始搭建初始项目，提高开发效率
- 提供项目规范和约定，比如同一项目中类似的模块文件结构，相同的开发范式，相同的模块依赖，相同的基础代码




## 编程题

### 1、概述脚手架实现的过程，并使用 NodeJS 完成一个自定义的小型脚手架工具

脚手架工具的实现原理时将预定义的文件结构通过模板处理输出到目标文件

实现的教授架已发布到npm,可通过`yarn add global cli-source` 安装

cli.js 代码

```javascript
// cli.js
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const ejs = require('ejs');

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Project name?'
    }
])
.then(anwser => {

    const tml = path.join(__dirname, 'templates');

    // 目标目录
    const destDir = process.cwd();

    // 复制模板文件到目标路径

    fs.readdir(tml, (err, files) => {
        if (err) {
            throw err
        }
        files.forEach(file => {
            ejs.renderFile(path.join(tml, file), anwser, (err, result) => {
                if (err) throw err;

                fs.writeFileSync(path.join(destDir, file), result)
            })
        })
    })

})
```

### 2、尝试使用 Gulp 完成 项目 的自动化构建

项目地址：https://github.com/alongithub/grunt-demo

### 3、使用 Grunt 完成 项目 的自动化构建

项目地址：https://github.com/alongithub/gulp-demo

项目视频：https://github.com/alongithub/gulp-demo/blob/master/Rec%200002.mp4

视频百度云地址：链接：https://pan.baidu.com/s/1Rq6AHmfqC-WcrgrPPs0-dg  提取码：w4x2