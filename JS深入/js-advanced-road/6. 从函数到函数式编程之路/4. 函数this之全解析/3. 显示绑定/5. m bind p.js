function add(num1, num2, num3, num4){
	return num1 + num2 + num3 +num4
} 

const add2 = add.bind(null, 10,10, 10, 10);

console.log(add2(30,40) ) // 100
