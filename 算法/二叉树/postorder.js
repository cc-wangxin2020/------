const tree = require('./tree')

// const postorder = (root) => {
//   if (!root) return
//   postorder(root.left)
//   postorder(root.right)
//   console.log(root.value);
// }
const postorder = (root) => {
  if (!root) return
  const stack = []
  let p = root
  let q = null
  // 标记右节点是否被访问过
  let r = null
  while (p || stack.length > 0) {
    if (p) {
      stack.push(p)
      q = p
      p = p.left
    } else {
      if (q.right && q.right !== r) {
        p = q.right
      } else {
        const n = stack.pop()
        console.log(n.value);
        r = n
        q = stack[stack.length - 1]
      }
    }
  }
}

postorder(tree)