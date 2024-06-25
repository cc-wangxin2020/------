/**
 * Vue中class属性可以绑定字符串，对象和由前两者组成的数组
 *  需要一个方法将上述数据类型转换为字符串作为props进行绑定
 *  为dom对象设置class三种方式：el.className > el.classList > setAttribute
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
      el.setAttribute(key, value)
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

