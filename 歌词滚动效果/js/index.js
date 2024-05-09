/**
 * 解析字符串返回对象列表 list[]
 */
function parseLrc() {
    let lines = lrc.split('\n')
    let res = []
    for (let i = 0; i < lines.length; i++) {
        let parse = lines[i].split(']')
        let timeStr = parse[0].substring(1)
        let obj = {
            time: parseTime(timeStr),
            data: parse[1]
        }
        res.push(obj)
    }
    return res
}

/**
 * 将字符串解析成时间
 */
function parseTime(str) {
    let times = str.split(':')
    return +times[0] * 60 + +times[1]
}

let dataObj = parseLrc()
/**
 * 页面展示
 */

let dom = {
    audio: document.querySelector('audio'),
    ul: document.querySelector('.container ul'),
    container: document.querySelector('.container'),
}
/**
 * dataObj数组中应该高亮显示的下标
 */
function getIndex() {
    let currentTime = dom.audio.currentTime
    for (let i = 0; i < dataObj.length; i++) {
        if (currentTime < dataObj[i].time) {
            return i - 1
        }
    }
    return dataObj.length - 1
}

/**
 * 创建歌词元素 li
 */
function createLrcElement(){
    let frem = document.createDocumentFragment()
    for(let i = 0; i<dataObj.length; i++){
        let li = document.createElement('li')
        li.textContent = dataObj[i].data
        frem.appendChild(li)
    }
    dom.ul.appendChild(frem)
}

createLrcElement()

let containerHeight = dom.container.clientHeight
let lis = document.querySelectorAll('li')
let liHeight = lis[0].clientHeight
let maxOffet = dom.ul.clientHeight - containerHeight
/***
 * 设置偏移量
 */
function setOffet(){
    let index = getIndex()
    let offset = liHeight*index + liHeight/2 - containerHeight/2
    if(offset < 0) {
        offset = 0
    }
    if(offset >= maxOffet){
        offset = maxOffet
    }
    dom.ul.style.transform = `translateY(-${offset}px)`
    // 添加active类显示当前高亮歌词
    let li = dom.ul.querySelector('.active')
    if(li) {
        li.classList.remove('active')
    }
    if(lis[index]){
        lis[index].classList.add('active')
    }
}

// setOffet()
dom.ul.scroll(100, 1000)
// dom.audio.addEventListener('timeupdate', setOffet)