function Person(name) {
  if (this === global || this === window) {
    const obj = {}
    obj.name = name
    Object.setPrototypeOf(obj, Person.prototype)
    obj.constructor = Person
    return obj
  } else {
    this.name = name
  }
}

var person1 = Person("小明");
console.log(person1.constructor);

var person2 = new Person("小明");
console.log(person2.constructor);

console.log("person1.name:", person1.name);  // person2.name: 小明
console.log("person2.name:", person2.name);  // person2.name: 小明