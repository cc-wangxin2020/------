import url from '@/assets/loading.svg'
import style from './style.module.less'

/**
 * 得到el中loading效果的img元素
 */
function getLoadingImage(el) {
    return el.querySelector('img[data-role=loading]')
}

/**
 * 创建img元素
 */
function setImgDom() {
    // const imgContainer = document.createElement('div')
    const imgDom = document.createElement('img')
    imgDom.dataset.role = 'loading'
    imgDom.src = url
    imgDom.className = style.loading
    // imgContainer.appendChild(imgDom)
    // imgContainer.className = style.imgContainer
    return imgDom
}

export default function (el, binding) {
    const curImg = getLoadingImage(el)
    if (binding.value) {
        if (!curImg) {
            const img = setImgDom()
            el.appendChild(img)
        }
    } else {
        if(curImg){
            curImg.remove()
        }
    }
}