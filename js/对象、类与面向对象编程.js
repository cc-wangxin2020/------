// class Person extends Object {
//   constructor(){
//     super();
//   }
// };

// class Person {
//   constructor(){
//     super();
//   }
// };

class Person extends Object {
  constructor(){
    super();
    console.log(this);
  }
};

new Person()

console.log(!1);