const graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3]
};

const visited = new Set();
//深度优先遍历
const dfs = (n) => {
  console.log(n);
  visited.add(n);
  graph[n].forEach((c) => {
    if (!visited.has(c)) {
      dfs(c);
    }
  });
};
dfs(2);

const visited2 = new Set();
//广度优先遍历
const bfs = (n) => {
  const queue = [n];
  visited2.add(n);
  while (queue.length) {
    let r = queue.shift();
    console.log(r);
    graph[r].forEach((c) => {
      if (!visited2.has(c)) {
        queue.push(c);
        visited2.add(c);
      }
    });
  }
};
bfs(2);
