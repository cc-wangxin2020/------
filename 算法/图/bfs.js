const graph = require('./graph.js')
console.log(graph);

const visited = new Set()
visited.add(2)
const bfs = (n, graph) => {
  const q = [n]
  while (q.length > 0) {
    const temp = q.shift()
    console.log(temp);
    graph[temp].forEach(element => {
      if (!visited.has(element)) {
        q.push(element)
        visited.add(element)
      }
    });
  }
}

bfs(2, graph)