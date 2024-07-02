//3. Object.freeze
const obj = {
    prop: 42
};
console.log(Object.getOwnPropertyDescriptor(obj, 'prop'));

Object.freeze(obj);
console.log(Object.getOwnPropertyDescriptor(obj, 'prop'));
  
// 添加
obj.prop2 = 'prop2';
// 修改值
obj.prop = 33;
// 删除
delete obj.prop;

console.log(obj.prop);
console.log(obj.prop2);
console.log(Object.isFrozen(obj))