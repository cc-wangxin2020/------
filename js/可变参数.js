/**
 * arguments——不是数组对象
* arguments是函数中又一个隐含参数，是一个类数组对象（伪数组）
* 和数组相似，可以通过索引来读取元素，也可以通过for循环变量，但是它不是一个数组对象，不能调用数组的方法
* arguments用来存储函数的实参，无论用户是否定义形参，实参都会存储到arguments对象中
* 可以通过该对象直接访问实参
 * 
 * 可变参数
- 在定义函数时可以将参数指定为可变参数，
- 可变参数可以接受任意数量实参，并将他们统一存储到一个数组中返回
- 可变参数的作用和arguments基本一致，不同点：
  * 可变参数的名字可以自己指定
  * 可变参数就是一个数组，可以直接使用数组的方法
  * 可变参数可以配合其他参数一起使用
  * 
 *  */
var sum = function(...args) {
    return args.reduce((a, b) => a + b, 0)
}

// 当可变参数与普通参数一起使用时，需要将可变参数写到最后

var sum2 = function(a, b, ...args) {
    console.log(a, b, args);
    // 函数返回'', 如果没有返回值，控制台会多打印一个undefined
    return ''
}

// 与 arguments 对比
var sum3 = function(a, b) {
    console.log(a, b, arguments);
    return ''
}

console.log(sum(1, 2, 3, 7));
console.log(sum2(1, 2));
console.log(sum3(1, 2));