// 通过async可以来创建一个异步函数
// 异步函数的返回值会自动封装到一个Promise中返回
function sum(a, b){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(a + b)
        }, 1000)
    })
}
async function fn(){
    /* 
        当通过await去调用异步函数时，会暂停代码的运行
            直到异步代码执行有结果时，才会将结果返回
        await只能用于async声明的异步函数中，或者es模块的顶级作用域中
        await阻塞的只有异步函数内部的代码，不会影响外部代码
        通过awaitd调用异步代码时，需要通过try-catch来处理异常
    */
    try {
        let res = await sum(1, 2)
        console.log(res);
    } catch (e) {
        console.log(e);
    }
    console.log('456');
    console.log('789');
}
// fn().then((res) => {
//     console.log(res);
// })

// fn()
// console.log('123');

async function fn4(){
    console.log(1);
    /* 
        当使用await调用函数后，当前函数后边的所有代码
            会在当前函数执行完毕后，被放入到微任务队列中
    */
    await queueMicrotask(()=>{
        console.log(2);
    })
    console.log(3);
}
// 注意执行顺序为 1 2 3 4 只有Promise的then、finally和catch等回调函数才会被加入到微任务队列中
// async function fn5(){
//     return new Promise(resolve => {
//         console.log(1);
//         console.log(2);
//         console.log(3);
//     })
// }
fn4()
;(async ()=> {
    await console.log('await')
})()
console.log(4);