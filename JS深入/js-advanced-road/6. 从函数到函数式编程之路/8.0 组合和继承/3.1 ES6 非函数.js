
class Animal {
    constructor() {
        this.name = "animal"
    }

    eat() {
        console.log("eat");
    }

    get gname() {
        return "getter name"
    }
}
Animal.prototype.name = "prototype的name";

class Person extends Animal {
    eat() {
        console.log('eat');
    }
}
Person.prototype.name = 'person'
var person = new Person();
console.log(person.name);
console.log(person.gname);
console.log(Object.getOwnPropertyNames(person.__proto__));
console.log(person.__proto__.name);