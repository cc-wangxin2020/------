const dom = {
    video: document.querySelector('video'),
    progress: document.querySelector('.progress input'),
    currentTime: document.querySelector('.progress .current-time'),
    totalTime: document.querySelector('.progress .total-time'),
    rate: document.querySelectorAll('.rate button'),
    sound: document.querySelector('.sound input'),
    currentSound: document.querySelector('.sound .current-sound'),
    save: document.querySelector('.save'),
    load: document.querySelector('.load')
}

// 初始化
dom.video.addEventListener('loadeddata', function () {
    setProgress()
    setRate()
    setSound()
})
/**
 * 设置进度条
 */
function setProgress() {
    dom.currentTime.innerText = setTimeFormart(dom.video.currentTime)
    dom.totalTime.innerText = setTimeFormart(dom.video.duration)
    dom.progress.value = dom.video.currentTime / dom.video.duration * 100
}
function setTimeFormart(time) {
    const hour = Math.floor(+time / 3600)
    const min = Math.floor((+time - hour * 3600) / 60)
    const second = Math.floor(+time - hour * 3600 - min * 60)
    function _formart(val) {
        if (val < 10) {
            return '0' + val
        }
        return val
    }
    return `${_formart(hour)}:${_formart(min)}:${_formart(second)}`
}

/**
 * 设置播放速度
 */
function setRate() {
    for (let i = 0; i < dom.rate.length; i++) {
        dom.rate[i].classList.remove('active')
        const rate = dom.rate[i].dataset.a
        if (+rate === dom.video.playbackRate) {
            dom.rate[i].classList.add('active')
        }
        console.log(dom.rate[i].dataset.a);
    }
    console.log(dom.video.playbackRate);
}

/**
 * 设置音量
 */
function setSound() {
    dom.currentSound.innerText = Math.floor(dom.video.volume * 100) + '%'
    dom.sound.value = Math.floor(dom.video.volume * 100)
}
// 交互
/**
 * 进度条交互
 */
dom.progress.addEventListener('input', function () {
    dom.video.currentTime = +this.value / 100 * dom.video.duration
    setProgress()
})

/**
 * 播放速率交互
 */

for(let i = 0;i < dom.rate.length;i++){
    dom.rate[i].addEventListener('click', function(){
        dom.video.playbackRate = +this.dataset.a
        setRate()
    })
}

/**
 * 音量交互
 */

dom.sound.addEventListener('input',function(){
    dom.video.volume = +this.value / 100
    setSound()
})

dom.video.addEventListener('ratechange', function(){
    setRate()
})
dom.video.addEventListener('volumechange', function(){
    setSound()
})

dom.video.addEventListener('timeupdate', function(){
    setProgress()
    setRate()
    setSound()
})

dom.save.addEventListener('click', function(){
    const obj = {
        currentTime: dom.video.currentTime,
        rate: dom.video.playbackRate,
        sound: dom.video.volume
    }
    localStorage.setItem('obj', JSON.stringify(obj))
})

dom.load.addEventListener('click', function(){
   const str = localStorage.getItem('obj')
   const obj = JSON.parse(str)
   console.log(obj);
   dom.video.currentTime = obj.currentTime
   dom.video.playbackRate = obj.rate
   dom.video.volume = obj.sound
   setProgress()
   setRate()
   setSound()
})