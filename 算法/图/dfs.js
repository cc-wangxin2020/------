const graph = require('./graph.js')
console.log(graph);

const visited = new Set()
const dfs = (n, graph) => {
  console.log(n);
  visited.add(n)
  graph[n].forEach(element => {
    if (!visited.has(element)) dfs(element, graph)
  });
}
dfs(2, graph)