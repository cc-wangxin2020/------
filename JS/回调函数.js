let student = [
    {
        name: 'Tom',
        age: 18,
        address: 'Beijing'
    },
    {
        name: 'Mary',
        age: 22,
        address: 'Shanghai'
    },
    {
        name: 'Tony',
        age: 16,
        address: 'Beijing'
    }
]

function filter(arr, callback) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            res.push(arr[i])
        }
    }
    return res
}

console.log(filter(student, function (s) {
    return s.age < 20
}));