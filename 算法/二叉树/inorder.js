const tree = require('./tree')

// const inorder = (root) => {
//   if (!root) return
//   inorder(root.left)
//   console.log(root.value);
//   inorder(root.right)
// }
const inorder = (root) => {
  if (!root) return
  const stack = []
  let p = root
  while (p || stack.length > 0) {
    if (p) {
      stack.push(p)
      p = p.left
    } else {
      const temp = stack.pop()
      console.log(temp.value);
      p = temp.right
    }
  }
}
inorder(tree)