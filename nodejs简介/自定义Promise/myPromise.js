const PROMISE_STATE = {
    PENDING:0,
    FULFILLED:1,
    REJECTED:2
}
class myPromise{
    #result
    #state = PROMISE_STATE.PENDING // 'pending' 0 'fulfilled' 1 'rejected' 2
    #callbacks = []
    constructor(executor){
        // bind() 改变this的指向但不会调用它
        executor(this.#resolve.bind(this), this.#reject.bind(this))
    }
    // 向原型中添加方法， 节省内存
    #resolve(value){
        if (this.#state !== PROMISE_STATE.PENDING) return
        this.#result = value
        this.#state = PROMISE_STATE.FULFILLED
        queueMicrotask(()=>{
            this.#callbacks.forEach(cb => {
                cb()
            })
        })
    }
    // 向实例对象中添加方法，耗费内存
    // #resolve = (value) => {
    //     this.#value = value
    //     console.log(this);
    //     console.log('resolve');
    // }
    #reject(reason){
        if (this.#state !== PROMISE_STATE.PENDING) return
        this.#result = reason
        this.#state = PROMISE_STATE.REJECTED
    }
    // 添加一个用来读取数据then的方法
    then(onFulfilled, onRejected){
        return new Promise((resolve, reject) => {
            if (this.#state === PROMISE_STATE.PENDING){
                this.#callbacks.push(() => (
                    resolve(onFulfilled(this.#result))
                ))
            }else if (this.#state === PROMISE_STATE.FULFILLED){
                queueMicrotask(()=>{
                    onFulfilled(this.#result)
                })
            }
        })
    }
}
const mp = new myPromise((resolve, reject) => {
    // resolve('xxx')
    // reject('xxx')
    setTimeout(()=>{
        resolve('hhhh')
    }, 1000)
})
mp.then((result)=>{
    console.log(result);
    return 'tom'
}).then((result) => {
    console.log(result);
    return 'jerry'
}).then((result) => {
    console.log(result);
})
console.log(mp);

// const p = new Promise((resolve, reject) => {
//     // setTimeout(()=>{
//         resolve('tom')
//     // }, 1000)
//     // reject('jerry')
// })
// console.log(p);
// p2 = p.then((result) => 'jerry')
// //  .then((result)=> console.log(result))
// console.log(p2);
// // console.log(p);