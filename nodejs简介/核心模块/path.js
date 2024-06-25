/* 
    path 
        - 通过path可以来获取各种路径
        - 要使用path，需要先对其进行引入
        - 
*/
// 不会因为调用方式的改变而改变路径
// 在不同的运行环境下，也能获得正确的路径
const path = require('node:path')
// const result = path.resolve(__dirname, './hello.js')
// console.log(result);

/* 
    fs(file System):
        - fs用来帮助node来操作磁盘中的文件
        - 文件操作也就是所谓的I/O
        
*/

// const fs = require('node:fs');
// const { log } = require('node:console');
// // 同步调用
// const buf = fs.readFileSync(path.resolve(__dirname, './hello.txt'))
// console.log(buf.toString());
// console.log(fs);
// 异步调用，需要传递两个参数，文件路径和回调函数
// 不会阻塞后续代码的执行
// fs.readFile(
//     path.resolve(__dirname, './hello.txt'),
//     (err, buffer)=>{
//         if(err){
//             console.log('出错了~');
//         }else{
//             console.log(buffer.toString());
//         }
//     }
// )

// console.log('后续');

/* 
    promise版本的fs
*/
const fs = require('node:fs/promises')
// fs.readFile(path.resolve(__dirname, './hello.txt'))
//     .then(buffer => {
//         console.log(buffer.toString());
//     })
//     .catch(e => {
//         console.log(e);
//     })
;(async ()=>{
    try {
        const buf = await fs.readFile(path.resolve(__dirname, './hello.txt'))
        console.log(buf.toString());
    } catch (error) {
        console.log("出错了~");
    }
})()
console.log('kkk');