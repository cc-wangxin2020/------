// 创建一个对象
const obj = {
    name:"Tom",
    age:18
}
// 来为对象创建一个代理
const handler = {
    // get用来指定读取数据时的行为，它的返回值就是最终读取到的值
    // 指定get后， 在通过代理读取对象属性时，就会调用get方法来获取值
    get(target, prop, receiver){
        /* 
            三个参数：
                target 被代理的对象
                prop 读取的属性
                receiver 代理对象
            vue代理后，当通过代理去读取属性时，返回值之前，会先做一个追踪的操作
                当通过代理去修改属性时，修改后，会通知之前所有用到该值的位置进行更新
            track() 追踪谁用了这个属性
        */
        console.log(target, prop, receiver);
        return target[prop]
    },
    // set会在通过代理修改对象时调用
    set(target, prop, value, receiver){
        target[prop] = value
        // trigger() 触发所有的使用该值的位置进行更新
        // 值修改之后做一些其他操作
    }
}

// 创建一个代理
const proxy = new Proxy(obj, handler)

// 修改代理的属性
proxy.age = 28

console.log(proxy.age);