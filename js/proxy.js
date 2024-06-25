// 数据绑定与可观察对象
const userList = []
class User{
  constructor(name){
    this.name_ = name
  }
}

const proxy = new Proxy(User, {
  // 通过代理使用new关键字创建对象时，会调用此函数进行拦截
  construct(){
    const newUser = Reflect.construct(...arguments);
    userList.push(newUser);
    return newUser
  }
})
new proxy('tom');
new proxy('john');
console.log(userList);

// 把集合绑定到一个事件分派程序，每次插入新实例都会发送消息
const arr = []
function emit(val){
  console.log(val);
}
const proxy1 = new Proxy(arr, {
  set(target, property, value, receiver){
    const result = Reflect.set(...arguments)
    if(result){
      emit(Reflect.get(target, property, receiver))
    }
    return result;
  },
  get(target, property, receiver){
    if(target[property] == 'Tom'){
      return '找不到tom'
    }else{
      return Reflect.get(...arguments)
    }
  }
})

proxy1[0] = 'Tom'
proxy1[1] = 'Jerry'
console.log(proxy1[0]);
console.log(proxy1[1]);
// proxy1.pop()

