const obj = {
    name: 'tom',
    age: 18,
    address: '北京'
}

const objProxy = new Proxy(obj, {
    get(target, prop, receiver) {
        console.log('get方法被调用', receiver);
        return target[prop]
    },
    set(target, prop, value, receiver) {
        console.log('set方法被调用', receiver);
        return Reflect.set(target, prop, value)
    }
})

objProxy.name = 'Mary';
console.log(obj);