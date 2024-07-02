const toString = Object.prototype.toString
function getObjectType(obj){
		return toString.call(obj)
}
const obj = String.prototype
console.log(typeof obj);
console.log(getObjectType(obj));