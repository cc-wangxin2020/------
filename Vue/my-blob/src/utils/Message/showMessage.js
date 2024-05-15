import { getComponentRootCom } from "./getComponentRootCom";
import Icon from "@/components/Icon"
import style from './style.module.less'
/**
 * 
 * @param {String} content Message的内容
 * @param {String} type Message的类型
 * @param {Number} duration 持续时间
 * @param {HTMLElement} container 容器
 */
// content, type = 'info', duration = 2000, container
export function showMessage(options) {
    const content = options.content || ''
    const type = options.type || 'info'
    const duration = options.duration || 2000
    const container = options.container || document.body
    const div = document.createElement('div')
    const iconDom = getComponentRootCom(Icon, { type })
    div.innerHTML = `<div>${iconDom.outerHTML}</div><div>${content}</div>`
    div.classList.add(style.message)
    div.classList.add(style[`message-${type}`])
    if (options.container) {
        if (getComputedStyle(container).position === 'static') {
            container.style.position = 'relative'
        }
    }
    container.appendChild(div)
    div.clientHeight
    div.style.opacity = 1
    div.style.transform = `translate(-50%, -50%)`
    setTimeout(() => {
        div.style.opacity = 0
        div.style.transform = `translate(-50%, -50%) translateY(-15px)`
        // div.style.transition = ``
        div.addEventListener('transitionend', function () {
            div.remove()
            options.callback && options.callback()
        }, { once: true })
        console.log('动画效果');
    }, duration);
}