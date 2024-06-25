console.log(Array.from('array'));
const m = new Map().set(1, 2).set(3, 4)
const s = new Set()
s.add(1)
s.add(2)
s.add(3)
console.log(m);
console.log(Array.from(m));
console.log(Array.from(s));
const obj = {
  name: 1,
  age: 2,
  length: 2
}

console.log(Array.from(obj));

console.log(Array.of(1,2,3,4));

let arr = [1, 2, 3]
arr[4] = 0
console.log(arr);
console.log(arr.length);
arr.length = 4
console.log(arr);
arr[4294967295] = 1
console.log(arr);
console.log(arr instanceof Array);
console.log(Array.isArray(arr));

let person1 = {
  toString() {
    return 'person1';
  },
  toLocaleString() {
    return 'LocalePerson1'
  }
}

let person2 = {
  toString() {
    return 'person2';
  },
  toLocaleString(){
    return 'LoaclePerson2'
  }
}

let person = [person1, person2]

let arr1 = [1, null, 2]

console.log(person);
console.log(person.toString());
console.log(person.toLocaleString());
console.log(arr1.toString());

let number = [1, 2, 3, 4]
let sum = number.reduce((pre, cur, index, array) => pre + cur*2, 0 )
console.log(sum);
