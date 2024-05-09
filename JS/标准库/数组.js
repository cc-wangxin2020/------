/**
 * 伪数组转变为真数组
 */

// let obj = {
//     0: 'a',
//     1: 'b',
//     length: 2
// }

// let arr = Array.prototype.slice.call(obj)

// console.log(arr);

// let num1 = [1, 2, 3]
// let num2 = [4, 5, 6]
// let num3 = [6, 7, 8]
// let arr2 = num1.concat(num2, num3)
// console.log(arr2);

let nums = [1, 1, '1', '1', '2', '3', 3, 4, 5]
// let res = []
/**
 * 去除所有字符串
 */
// for (let i = 0; i < nums.length; i++) {
//     if (typeof nums[i] === 'string') {
//         nums.splice(i--, 1)
//     }
// }
// console.log(nums);

/**
 * 数组去重
 */
// let res = []
for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
            nums.splice(j--, 1)
        }
    }
}
console.log(nums);
let names = ['.jpg', 'gif', '.bmp', '.webp', '.png']
let filename = 'd://files/mymap/3.jpg'
let index = filename.lastIndexOf('.')
let name = filename.substring(index)
console.log(names.includes(name));