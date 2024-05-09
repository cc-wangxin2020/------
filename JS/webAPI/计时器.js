let timerId;
function start() {
    if (timerId) {
        return
    }
    timerId = setInterval(() => {
        // console.clear()
        console.log(new Date().toLocaleString());
    }, 1000)
}

function stop() {
    clearInterval(timerId)
    timerId = null
}