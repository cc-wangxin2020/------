const json = {
  a: { b: { c: 1 } },
  d: [1, 2]
}

const dfs = (n, path) => {
  console.log(path);
  if (n instanceof Array) return
  Object.keys(n).forEach(item => {
    dfs(n[item], path.concat(item))
  })
}

dfs(json, [])