/**
 * 挂载：首次生成dom
 * 更新：更新dom
 * HTML Attributes 和 DOM Properties:
 *  1. 前者是html元素的属性，后者是DOM对象的属性
 *  2. 浏览器通过解析html元素得到dom对象，并将前者的属性映射到dom对象上
 *  3. 前者的作用是设置DOM properties的初始值，dom更改后 html属性将不会随之更改（静态的 ）
 */
const { effect, ref } = Vue
const count = ref(1)
const renderer = createRenderer({
  createElement(tag) {
    return document.createElement(tag)
  },
  setElementText(el, text) {
    el.textContent = text
  },
  insert(el, parent, anchor = null) {
    parent.insertBefore(el, anchor)
  },
  patchProps(el, key, prevValue, nextValue) {
    if (shouldSetAsProps(el, key, nextValue)) {
      const type = typeof el[key]
      if (type === 'boolean' && value === '') {
        el[key] = true
      } else {
        el[key] = value
      }
    } else {
      el.setAttributes(key, value)
    }
  }
})

const container = document.getElementById('app')
const vnode = {
  type: 'div',
  props: {
    disabled: '',
    id: 'div'
  }
  children: [
    {
      type: 'span',
      children: 'ok'
    }
  ]
}

effect(() => {
  renderer.render(vnode, container)
})

function createRenderer(options) {
  const { createElement, setElementText, insert, patchProps } = options
  function mountElement(vnode, container) {
    const el = createElement(vnode.type)
    if (typeof vnode.children === 'string') {
      setElementText(el, vnode.children)
    } else if (Array.isArray(vnode.children)) {
      vnode.children.forEach(child => {
        patch(null, child, el)
      })
    }
    if (vnode.props) {
      for (const key in vnode.props) {
        patchProps(el, key, null, vnode.props[key])
      }
    }
    insert(el, container)
  }
  function shouldSetAsProps(el, key, value) {
    if (key === 'form' && el.tagName === 'INPUT') return false
    return key in el
  }
  function patch(n1, n2, container) {
    if (!n1) {
      mountElement(n2, container)
    }
  }
  function render(vnode, container) {
    if (vnode) {
      patch(container._vnode, vnode, container)
    } else {
      if (container._vnode) { // 卸载
        container.innerHTML = ''
      }
    }
    container._vnode = vnode
  }
  return {
    render
  }
}

count.value++

