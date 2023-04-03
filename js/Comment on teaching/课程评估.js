let value = document.getElementsByTagName('table input')
for (let i = 0; i < value.length; i++) {
    if (i % 5 == 4) {
        value[i].checked = true
    }
}
let item_754 = document.getElementById('item_754')
item_754.innerHTML = '老师讲课生动形象、由浅入深，列举了很多生动的例子，课堂氛围很好'

let item_755 = document.getElementById('item_755')
item_755.innerHTML = '希望老师的进度可以稍微快一点，多结合实际应用'

let item_756 = document.getElementById('item_755')
item_755.innerHTML = '希望老师的进度可以稍微快一点，多结合实际应用'

let item_757 = document.getElementById('item_755')
item_755.innerHTML = '希望老师的进度可以稍微快一点，多结合实际应用'

let item_758 = document.getElementById('item_755')
item_755.innerHTML = '希望老师的进度可以稍微快一点，多结合实际应用'

let item6 = document.getElementById('760')
item6.checked = true

let item7 = document.getElementsByClassName('required checkbox')
for (let i of item7) {
    i.checked = true
}