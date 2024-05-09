function Person(name, age) {
    this.name = name
    this.age = age
}
Person.prototype.sayHi = function () {
    console.log(`hello ${this.name}`);
}

function User(name, age, address) {
    Person.call(this, name, age)
    this.address = address
}
Object.setPrototypeOf(User.prototype, Person.prototype)
let user1 = new User('Tom', 18, 'shanghai')
user1.sayHi()