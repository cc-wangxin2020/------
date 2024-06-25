
let a = 10
let b = 20
const obj = {
    name: 'Tom',
    age: 18
}
/* 
    在定义模块时，模块中的内容默认时不能被外部看到的
        可以通过exports来设置要向外部暴露的内容
    
    访问exports的方式有两种:
        exports
        module.exports
        - 当在其他模块中引入当前模块时，require函数返回的就是exports
        - 可以将希望暴露给外部模块的内容设置为exports的属性
*/
// 可以通过exports一个一个导出值
// 也可以直接通过module.exports同时导出多个值
// exports.a = a
// exports.b = b
// 对象.属性
module.exports = {
    name: 'Tom',
    age: 18,
    gender: '男'
}
console.log(arguments);
// exports = {
//     a: 'hh',
//     b: [1,2,3,5],
//     c: ()=>{
//         console.log(111);
//     }
// }