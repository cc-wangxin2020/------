// var twoSum = function(nums, target) {
//     let hash = {}
//     for (let i = 0; i < nums.length; i++) {
//         if (hash[target - nums[i]] !== undefined) {
//             return [i, hash[target - nums[i]]]
//         }
//         hash[nums[i]] = i
//     }
// }
// console.log(twoSum([8, 9, 2, 5, 7], 9));

// let str = 'string'
// let arr1 = [1, 2, 1]
// let arr2 = [1, 2, 1]
// console.log(arr1.join(''));

var romanToInt = function(s) {
    let data = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }
    if (s in ['IV', 'IX', 'XL', 'XC', 'CD', 'CM']) {
        return data[s[1]] - data[s[0]]
    } else {
        let temp = 0;
        for (let i in s) {
            temp += data[i]
        }
        return temp
    }
};