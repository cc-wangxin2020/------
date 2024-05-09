// (() => {
//     console.log(this);
// })()
// function m1() {
//     console.log(this);
// }
// // m()
// m1()

// function User(name, age) {
//     this.name = name
//     this.age = age
// }
// User.prototype.hello = () => {
//     console.log(this, 'hello');
// }
// let user = new User('tom', 18)
// user.hello()

// let obj = {
//     a: 1,
//     b: 2,
//     method: function () {
//         console.log(this);
//     },
//     c: {
//         m: () => {
//             console.log(this);
//         }
//     }
// }
// obj.method()
// obj.c.m()

let obj1 = {
    a: 1,
    b: 2
}
let obj2 = {
    a: 1,
    b: 2,
    c: 3
}

Object.prototype.print = function () {
    for (let i in this) {
        if(Object.hasOwn(this, i))
        console.log(i + ':' + this[i]);
    }
}

obj1.print()