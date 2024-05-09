console.log('hello node!');
// console.log(global);
fetch()

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const obj = {
    name: 'tom',
    age: 18
}
const p1 = new Person('tom', 18)
const p2 = structuredClone(p1)
console.log(p1);
console.log(p2 instanceof Object);
// console.log(p1 instanceof Object);
console.log(Person.prototype.__proto__);
console.log(Object.getPrototypeOf(p1.__proto__));
console.log(Object.getPrototypeOf(p2));
console.log(Object.getPrototypeOf(obj));

function User(name, age) {
    this.name = name
    this.age = age
    this.sayHi = function () {
        console.log(`hello ${this.name}`)
    }
}
const u1 = new User('Mary', 18)
// console.log(u1);
// console.log(Object.getPrototypeOf(u1));
// Object.setPrototypeOf(u1, Object.prototype)
// console.log(u1);
// const u2 = structuredClone(u1)
console.log(u1.__proto__);
console.log(u1.__proto__.__proto__);
console.log(Object.getPrototypeOf(User));
console.log(Function.prototype);
// console.log(Object.getPrototypeOf(u2));
