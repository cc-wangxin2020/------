/* 
    核心模块，是node中自带的模块，可以在node直接使用
    window 是浏览器的宿主对象 node中没有
    global 是node中的全局对象，作用类似于window
    ES标准下，全局对象是globalThis
*/
console.log(globalThis);

/* 
    核心模块
        process
            - 表示当前的node进程
            - 通过该对象可以获取进程的信息，或者对进程做各种操作
            - 如何使用
                1. process是一个全局变量，可以直接使用
                2. 属性和方法：
                    process.exit() —— 结束当前进程
                    process.nextTick(callback[, ...args])
                        - 将函数插入到tick队列中
                        - tick队列中的代码会在下一次事件循环之前执行
                            会在微任务队列和宏任务队列之前执行
                调用栈 > tick队列 > 微任务队列 > 宏任务队列
        path
            - 
*/

// console.log(1);
// console.log(2);
// process.exit()
// console.log(3);
// setTimeout(()=>{
//     console.log(1);
// })
// queueMicrotask(()=>{
//     console.log(2);
// })

// process.nextTick(()=>{
//     console.log(3);
// })
// console.log(4);
// console.log(process);