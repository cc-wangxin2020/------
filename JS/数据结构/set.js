const set1 = new Set([1, 2, 3, 4, 12, 2, 3, 5, 7, 4])
// set1.forEach((value, key, set) => {
//   console.log(value, key, set);
// });

// const obj = {
//   name: 'tom', 
//   age: 12,
//   address: 'beijing'
// }
Object.prototype.hobby = 'sing'

for (const key in set1) {     
  console.log(key);
}
const arr = [1, 2, 3, 4, 5, 6]
console.log(set1 instanceof Object);