// 非立即执行：n秒后执行函数，如果在n秒内触发事件，则会重新计算函数触发时间
/**
 * 
 * @param {Function} func 
 * @param {number} delay 
 */
function debounce(func, delay) {
  let timeout
  return function () {
    const _this = this
    const args = [...arguments]
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      func.apply(_this, args)
    }, delay)
  }
}


// 立即执行：触发函数后立即执行，n秒内继续触发不会执行，n秒后触发才可执行
/**
 * 
 * @param {Function} func 
 * @param {number} delay 
 */
function debounce(func, delay) {
  let timeout
  return function () {
    const _this = this
    const args = [...arguments]
    if (timeout) clearTimeout(timeout)
    const flag = !timeout
    timeout = setTimeout(() => {
      timeout = null
    }, delay)
    if (flag) func.apply(_this, args)
  }
}

// 合并版本
/**
 * 
 * @param {Function} func 
 * @param {number} delay 
 * @param {boolean} immediate 判断是否立即执行：true: 立即执行 false：非立即执行
 * @returns 
 */
function debounce(func, delay, immediate) {
  let timeout
  return function () {
    const _this = this
    const args = [...arguments]
    if (timeout) clearTimeout(timeout)
    if (immediate) {
      const flag = !timeout
      timeout = setTimeout(() => {
        timeout = null
      })
      if (flag) func.apply(_this, args)
    } else {
      timeout = setTimeout(() => {
        func.apply(_this, args)
      }, delay)
    }
  }
}

// 节流：连续触发事件但在n秒内只执行一次函数
/**
 * 
 * @param {Function} func 
 * @param {number} delay 
 * @returns 返回一个函数
 */
function throttle(func, delay){
  let timeout
  return function(){
    const _this = this
    const args = [...arguments]
    if(!timeout){
      timeout = setTimeout(()=> {
        timeout = null
        func.apply(_this, args)
      }, delay)
    }
  }
}