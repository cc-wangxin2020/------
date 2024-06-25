const fs = require('node:fs/promises')
const path = require('node:path')
// 创建目录
// fs.mkdir(path.resolve(__dirname, './hello/abc'), {recursive: true})
//     .then(r => {
//         console.log(r);
//     })
//     .catch(err => {
//         console.log(err);
//     })
// 删除目录
fs.rmdir(path.resolve(__dirname, './hello'), {recursive: true})
    .then(r => {
        console.log(r);
    })
    .catch(err => {
        console.log(err);
    })
