// 一个虚拟dom

const myComponent = function () {
  return {
    tag: 'el',
    props: {
      class: 'box',
      onClick: function () {
        console.log(this);
      }
    },
    children: 'click me'
  }
}

const myComponent2 = {
  render() {
    return {
      tag: 'el',
      props: {
        class: 'box',
        onClick: function () {
          console.log(this);
        }
      },
      children: 'click me'
    }
  }
}
const vnode = {
  tag: myComponent2
}
function renderer(vnode, container) {
  if (typeof vnode.tag === 'string') {
    mountElement(vnode, container)
  } else if (typeof vnode.tag === 'function') {
    mountComponent(vnode, container)
  } else if (typeof vnode.tag === 'object') {
    mountComponent2(vnode, container)
  }
}

function mountElement(vnode, container) {
  const el = document.createElement(vnode.tag)
  for (const key in vnode.props) {
    if (/^on/.test(key)) {
      el.addEventListener(key.substr(2).toLowerCase(), vnode.props[key])
    }
    el.setAttribute(key, vnode.props[key])
  }
  if (typeof vnode.children === 'string') {
    el.appendChild(document.createTextNode(vnode.children))
  } else if (Array.isArray(vnode.children)) {
    vnode.children.forEach(item => {
      renderer(item, el)
    });
  }
  container.appendChild(el)
}
function mountComponent(vnode, container) {
  const subtree = vnode.tag()
  renderer(subtree, container)
}
function mountComponent2(vnode, container) {
  const subtree = vnode.tag.render()
  renderer(subtree, container)
}
renderer(vnode, document.querySelector('#app'))