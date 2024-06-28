const tree = {
  value: 'a',
  children: [
    {
      value: 'b',
      children: [
        {
          value: 'd',
          children: []
        },
        {
          value: 'e',
          children: []
        }
      ]
    },
    {
      value: 'c',
      children: [
        {
          value: 'f',
          children: []
        },
        {
          value: 'g',
          children: []
        }
      ]
    }
  ]
}

const bfs = (root) => {
  const q = [root]
  while(q.length > 0){
    const temp = q.shift()
    console.log(temp.value);
    temp.children.forEach(element => {
      q.push(element)
    });
  }
}

bfs(tree)