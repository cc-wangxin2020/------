/**
 * 在vnode.props中定义绑定的事件属性 以on开头
 * 为了减少在移除事件时的性能损耗，通过定义一个伪造的invoker函数来进行优化，并设置内部属性vnode._vel属性来指向此函数
 * 同时由于可以绑定多个事件，重新定义vnode._vel数据结构为对象
 * 由于同一事件可以绑定多个函数，重新定义vnode.props值的数据结构(替代的是整个值，单个fn或者fn数组)
 * 
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
    if (/^on/.test(key)) {
      const invokers = el._vei || (el._vei = {})
      let invoker = el._vei[key]
      const name = key.slice(2).toLowerCase()
      if (nextValue) {
        if (!invoker) {
          invoker = el._vei[key] = (e) => {
            if (Array.isArray(invoker.value)) {
              invoker.value.forEach(fn => {
                fn(e)
              })
            } else {
              invoker.value(e)
            }
          }
          invoker.value = nextValue
          el.addEventListener(name, invoker)
        } else {
          invoker.value = nextValue
        }
      } else if (invoker) {
        el.removeEventListener(name, invoker)
      }
    } else if (shouldSetAsProps(el, key, nextValue)) {
      const type = typeof el[key]
      if (type === 'boolean' && value === '') {
        el[key] = true
      } else {
        el[key] = nextValue
      }
    } else {
      el.setAttribute(key, nextValue)
    }
  }
})

const container = document.getElementById('app')
const vnode = {
  type: 'div',
  props: {
    disabled: '',
    id: 'div',
    onClick: [
      () => {
        console.log('啦啦啦');
      },
      () => {
        console.log('哈哈哈');
      }
    ],
    onContextmenu: () => {
      console.log('菜单');
    }
  },
  children: [
    {
      type: 'button',
      children: 'ok'
    }
  ]
}

effect(() => {
  renderer.render(vnode, container)
  console.log(vnode);
})
function shouldSetAsProps(el, key, value) {
  if (key === 'form' && el.tagName === 'INPUT') return false
  return key in el
}
function unmount(vnode) {
  const parent = vnode.el.parentNode
  if (parent) {
    parent.removeChild(vnode.el)
  }
}
function createRenderer(options) {
  const { createElement, setElementText, insert, patchProps } = options
  function mountElement(vnode, container) {
    const el = vnode.el = createElement(vnode.type)
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
  function patch(n1, n2, container) {
    // 新旧vnode都存在但类型不同，卸载旧vnode 
    if (n1 && typeof n1 !== typeof n2) {
      unmount(n1)
      n1 = null
    }
    // n1、n2类型相同，根据type 判断vnode是普通标签还是组件
    const { type } = n2
    if (typeof type === 'string') {
      if (!n1) {
        // 旧vnode不存在，直接挂载新vnode
        mountElement(n2, container)
      } else {
        // 新旧vnode都存在且类型相同，对比打补丁
        patchElement(n1, n2)
      }
    } else if (typeof type === 'object') {

    } else {

    }
  }
  function render(vnode, container) {
    if (vnode) {
      patch(container._vnode, vnode, container)
    } else {
      if (container._vnode) { // 卸载
        unmount(container._vnode)
      }
    }
    container._vnode = vnode
  }
  return {
    render
  }
}

count.value++

