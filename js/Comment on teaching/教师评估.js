// function twoSum(nums, target) {
//     let hash = {}
//     for (let i = 0; i < nums.length; i++) {
//         if (hash[target - nums[i]] !== undefined) {
//             console.log(hash);
//             return [i, hash[target - nums[i]]]
//         }
//         hash[nums[i]] = i
//     }
// }
// console.log(twoSum([9, 8, 5, 7, 2], 9));
let value = document.getElementsByTagName('input')
for (let i = 0; i < value.length; i++) {
    if (i % 5 == 4) {
        value[i].checked = true
    }
}

let item_802 = document.getElementById('item_802')
item_802.innerHTML = "老师讲课风趣幽默，很有感染力，课堂氛围很好"

let item_803 = document.getElementById('item_803')
item_803.innerHTML = "希望老师能够多举些例子，可以帮助理解"