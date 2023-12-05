// let s1 = Symbol()
// let s2 = Symbol()
// console.log(typeof s1);
// console.log(s1);
// console.log(s1 == s2);

// let foo1 = Symbol('foo')
// let foo2 = Symbol('foo')
// console.log(typeof foo1);
// console.log(foo1);
// console.log(foo1 == foo2);

// let bool = new Boolean(false)
// console.log(typeof bool);
// console.log(bool);

// 在全局符号注册表中创建全局符号 Symbol.for()
// 在全局符号注册表中查询全局符号 Symbol.keyFor() 接收“全局符号”作为参数
let s1 = Symbol.for('foo')
console.log(Symbol.keyFor(s1));

let s2 = Symbol('s2')
console.log(Symbol.keyFor(s2));  

// console.log(Symbol.keyFor(123));

let s3 = Symbol('foo')
    s4 = Symbol('var')
    s5 = Symbol('baz')
    s6 = Symbol('qux')

let o = {}
Object.defineProperty(o, 'name', {value: 'lili'})
Object.defineProperties(o, {
  [s3]: {value: 'foo'},
  [s4]: {value: 'var'}
})
console.log(o);
console.log(Object.getOwnPropertyNames(o));
console.log(Object.getOwnPropertySymbols(o));
console.log(Reflect.ownKeys(o));
console.log(Object.getOwnPropertyDescriptor(o));
console.log(Object.getOwnPropertyDescriptors(o));

// Symbol.asyncIterator 异步迭代 通常与for await of 配合使用
class Foo {
  async * [Symbol.asyncIterator](){}
}
let o1 = new Foo()
console.log(o1[Symbol.asyncIterator]());

// Symbol.hasInstance 一个方法判断一个对象是否是他的实例 与instanceof配合使用
class Bar{}
let bar = new Bar()
console.log(bar instanceof Bar);
console.log(Bar[Symbol.hasInstance](bar));

let f = new Function()
console.log(f instanceof Function);
console.log(Function[Symbol.hasInstance](f));

let o2 = new Object()
console.log(o2 instanceof Object);
console.log(Object[Symbol.hasInstance](o2));

// Symbol.isConcatSpreadable 默认为true 将一个类数组对象拼接成数组实例
let arr = ['foo']
let arr2 = ['bar']
console.log(arr2[Symbol.isConcatSpreadable]);
console.log(arr.concat(arr2));
arr2[Symbol.isConcatSpreadable] = false;
console.log(arr.concat(arr2));

// Symbol.iterator 该方法返回默认的迭代器，并由for of 调用

// console.log(String.prototype.match());
// console.log(RegExp.prototype[Symbol.match]);
// console.log(String.prototype.replace());
// console.log(RegExp.prototype[Symbol.replace]);
let str = 'foobarfoo'
console.log(str.replace(/foo/, 'ok'));

class User extends Array {
  static get [Symbol.species](){
    return Array
  }
}

let user = new User()
console.log(user instanceof User);
console.log(user instanceof Array);