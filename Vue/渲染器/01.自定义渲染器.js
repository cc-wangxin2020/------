/**
 * 渲染器作用：将虚拟dom渲染成真实dom，同时vue3中的渲染器是跨平台的
 * 渲染器和渲染函数 renderer 和 render(vnode, container)
 *  renderer: 渲染器，一个包含render和其他函数的对象，通过调用renderer.render() 实现挂载或更新
 *  render: 一个函数，参数为vnode和container 返回值为真实dom元素
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
  }
})
const renderer1 = createRenderer({
  createElement(tag) {
    return { tag }
  },
  setElementText(el, text) {
    el.textContent = text
  },
  insert(el, parent, anchor = null) {
    // parent.insertBefore(el, anchor)
    parent.children = el
  }
})
const container = document.getElementById('app')
const vnode = {
  type: 'div',
  children: {
    type: 'span',
    children: 'ok'
  }
}
// renderer.render()

effect(() => {
  renderer1.render(vnode, container)
})

function createRenderer(options) {
  const {
    createElement,
    setElementText,
    insert
  } = options
  function mountElement(vnode, container) {
    const el = createElement(vnode.type)
    if (typeof vnode.children === 'string') {
      setElementText(el, vnode.children)
      // el.textContent = vnode.children
    } else {
      mountElement(vnode.children, el)
    }
    insert(el, container)
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

