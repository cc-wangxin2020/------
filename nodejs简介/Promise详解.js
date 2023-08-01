// promise就是一个用来存储数据的对象
// 但是由于Promise存取的方式比较特殊，所以可以直接将异步调用的结果存储到Promise中
const promise = new Promise((resolve, reject) => {
    reject('123')
})
// promise.then(res => {
//     console.log(res);
// }, rea => {
//     console.log(rea);
// })
/* 
    Promise中的
        then(return new Promise())
        catch
        - 这三个方法都会返回一个新的Promise，
            Promise中会存储回调函数的返回值
        finally
            - finally的返回值，不会存储到新的Promise中
    当Promise出现异常时，而整个调用链中没有出现catch，则异常会向外抛出
*/
promise
    .then(r => console.log('第一个then', r))
    .catch(r => 'hhh')
    // .then(r => '1234')
    .then(r => console.log(r))

/* 
    静态方法
        Promise.resolve() 创建一个立即完成的Promise
        Promise.resolve(10) - 创建了一个Promise并且存储了一个数据10
        Promise.reject('错误') 创建了一个立即拒绝的Promise
        Promise.all([...]) 同时返回多个Promise的执行结果，其中有一个报错，就返回错误
        Promise.allSettled([...]) 同时返回多个Promise的执行结果
        Promise.race([...]) 返回执行最快的Promise（不考虑对错）
        Promise.any([...]) 返回最快的完成的Promise
        */
// Promise.resolve(10)
// Promise.reject('错误')

function sum(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 1000)
    })
}
Promise.all([
    sum(1, 2),
    sum(3, 4),
    sum(5, 6),
    sum(7, 8)
]).then(r => console.log(r))
Promise.allSettled([
    sum(1, 2),
    sum(3, 4),
    Promise.reject('hhh'),
    sum(5, 6),
    sum(7, 8)
]).then(res => {
    console.log(res);
})
Promise.race([
    sum(1, 2),
    sum(3, 4),
    Promise.reject('hhh'),
    sum(5, 6),
    sum(7, 8)
]).then(res => {
    console.log(res);
}).catch(rea => {
    console.log(rea);
})
Promise.any([
    sum(1, 2),
    sum(3, 4),
    Promise.reject('hhh'),
    sum(5, 6),
    sum(7, 8)
]).then(res => {
    console.log(res);
}).catch(rea => {
    console.log(rea);
})
