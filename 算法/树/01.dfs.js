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

const dfs = (root) => {
  console.log(root.value);
  root.children.forEach(item => {
    dfs(item)
  });
}

dfs(tree)