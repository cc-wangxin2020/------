/* 
    在node中，默认支持的模块化规范叫做CommonJS,
        在CommonJS中，一个JS文件就是一个模块

    CommonJS规范
        cjs为扩展名，表示是一个CommonJS标准的模块
        - 引入模块
            - 使用require('模块的路径')函数来引入模块
            - 引入自定义模块时
                - 模块名要以 ./ 或 ../ 开头
            - 扩展名可以省略
                - 在CommonJS中，如果省略js文件扩展名，node，会自动为文件补全扩展名
                    ./m1.js 如果没有js 会寻找./m1.json
                    js --> json --> node（特殊）
            - 引入核心模块
                - 直接写核心模块的名字即可
            
*/
const m1 = require('./m1')
// 引入核心模块
const path = require('path')
const path = require('node:path')
console.log(m1);
console.log(path);