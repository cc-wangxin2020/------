/* 
    进程和线程
        - 进程
            - 程序运行的环境
        - 线程
            - 线程是实际进行运算的东西
    同步
        - 通常情况代码都是自上而下一行一行执行
        - 前边的代码不执行后面的代码也不会执行
        - 同步的代码执行会出现阻塞的情况
        - 一行代码执行慢会影响到整个程序的执行
    解决同步问题：
        - Java python
            - 通过多线程来解决
        - Nodejs
            - 通过异步方式解决
    异步
        - 一段代码的执行不会影响其他的代码
        - 异步的问题：
            - 异步的代码无法通过return来设置返回值
        - 特点：
            1. 不会阻塞其他代码的执行
            2. 需要通过回调函数来返回结果
        - 基于回调函数的异步带来的问题
            1. 代码可读性差
            2. 可调试性差
    Promise——存储数据的对象
        - Promise可以用来存储异步调用的数据
*/
function sum(a, b, cd){
    // console.log('1');
    setTimeout(function(){
        cd(a + b)
    }, 3000)
}
console.log('2');
const res = sum(1, 1, (result)=>{
    console.log(result);
})
console.log(res);
console.log('hhhhhh');