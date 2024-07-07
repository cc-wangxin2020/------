
class Logger {
    name = 'Logger'
    log() {
        console.log("Logger::", ...arguments);
    }
}
Logger.prototype.name = 'Logger'

class Animal {
    eat() {
        console.log("Animal:: is eating",);
    }
}

class Person extends Animal {
    eat() {
        console.log("hhhhhh");
    }
    walk() {
        console.log("Person:: is walking",);
    }
}

const whiteList = ["constructor"]
function mixin(targetProto, sourceProto) {
    const keys = Object.getOwnPropertyNames(sourceProto);
    keys.forEach(k => {
        if (whiteList.indexOf(k) <= 0) {
            targetProto[k] = sourceProto[k];
        }
    })
}
mixin(Person.prototype, Logger.prototype)

console.log(Person.prototype);
var person = new Person();
person.log("log test")
person.eat()
console.log(Object.getOwnPropertyDescriptors(Logger.prototype));