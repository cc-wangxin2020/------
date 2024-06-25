/* 
    ES模块化
*/
export let a = 1
export const obj = {
    name:'Tom',
    age: 10
}
// 设置默认导出，一个模块只有一个默认导出
export default function sum(a, b){
    return a + b
}