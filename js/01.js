// a = 10
// console.log(++a);

// var n1 = 10,
//     n2 = 20
// var n = n1++;
// console.log('n=' + n); // 10
// console.log('n1=' + n1); // 11

// n = ++n1
// console.log('n=' + n); //12
// console.log('n1=' + n1); //12

// n = n2--
//     console.log('n=' + n); //20
// console.log('n2=' + n2); //19
// n = --n2
// console.log('n=' + n); //18
// console.log('n2=' + n2); //18

// var a = 1 || 2 && 3;
// console.log(a);

// var score = Number(prompt('输入成绩'))

// if (score === 100) {
//     alert()
// }

// var score = 60;

// switch (true) {
//     case score >= 60:
//         console.log('合格');
//         break
//     default:
//         console.log('不合格');
//         break
// }

var money = 1000;
var year = 0;
while (money <= 5000) {
    money *= 1.05;
    year++;
}
console.log(year, money);
var sum = 0,
    count = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 7 == 0) {
        count++;
        sum += i
    }
}
console.log(sum, count);
// var s = 356 //1 100;
// console.log(s);
// 打印所有的水仙花数
// for (var i = 100; i < 1000; i++) {
//     var a, b, c;
//     a = Math.floor(i / 100);
//     b = Math.floor(i % 100 / 10);
//     c = i % 10
//     if (a ** 3 + b ** 3 + c ** 3 == i) {
//         console.log(i);
//     }
// }

// 打印所有的质数（1-100）
// for (var i = 2; i <= 100; i++) {
//     var flag = true;
//     for (var j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = false;
//             break
//         }
//     }
//     if (flag) {
//         console.log(i);
//     }

// }

// 打印九九乘法表
for (var i = 1; i < 10; i++) {
    var str = '';
    for (var j = 1; j < i + 1; j++) {
        str += j + '*' + i + '=' + (i * j) + '\t';
    }
    console.log(str);
}