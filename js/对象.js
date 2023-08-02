// 使用new关键字调用的函数，是构造函数constructor
// 构造函数是专门用来创建对象的函数
// function sum(a, b) {
//     return a + b
// }
class Person{
    constructor(name, age){
        this.#name = name
        this.#age = age
        console.log(this.#name, this.#age);
    }
    #name
    #age
}
const p1 = new Person('tom', 12)