let table = document.getElementsByTagName('table')[0]
let input = table.getElementsByTagName('input')
for (let i = 0; i < input.length; i++) {
    if (i % 5 === 0) {
        input[i].checked = true
    }
}

let item_802 = document.getElementById('item_802')
item_802.innerHTML = "老师讲课风趣幽默，很有感染力，课堂氛围很好"

let item_803 = document.getElementById('item_803')
item_803.innerHTML = "希望老师能够多举些例子，可以帮助理解"