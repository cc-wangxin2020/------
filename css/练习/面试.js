var arr1 = [1, 2, 3, 4]
var arr2 = [2, 4, 5, 8, 9]

function twoArrSort(arr1, arr2) {
    let i = 0,
        j = 0
    let newArr = []
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            newArr.push(arr1[i])
            i++
        } else if (arr1[i] > arr2[j]) {
            newArr.push(arr2[j])
            j++
        } else {
            newArr.push(arr1[i])
            arr2.splice(j, 1)
            i++
            j++
        }
    }
    // 看是否有数组剩余，拼接到新数组
    if (i < arr1.length) {
        return newArr.concat(arr1.splice(i));
    } else if (j < arr2.length) {
        return newArr.concat(arr2.splice(j));
    } else {
        return newArr
    }
}
console.log(twoArrSort(arr1, arr2))