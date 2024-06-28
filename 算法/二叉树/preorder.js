const tree = require('./tree')
// 递归版
// const preorder = (root) => {
//   if (!root) return
//   console.log(root.value);
//   preorder(root.left)
//   preorder(root.right)
// }
// 非递归版
const preorder = (root) => {
  if (!root) return
  const q = [root]
  while (q.length > 0) {
    const temp = q.pop()
    console.log(temp.value);
    if (temp.right) q.push(temp.right)
    if (temp.left) q.push(temp.left)
  }
}
preorder(tree)