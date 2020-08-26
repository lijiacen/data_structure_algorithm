var averageOfLevels = function (root) {
  if (!root) return null;
  let arr = [];
  const bfs = (root, level) => {
    const queue = [[root, level]];
    while (queue.length) {
      let [r, l] = queue.shift();
      if (arr[l]) {
        arr[l].push(r.val);
      } else {
        arr[l] = [r.val];
      }
      r.left && queue.push([r.left, l + 1]);
      r.right && queue.push([r.right, l + 1]);
    }
  };
  bfs(root, 0);

  let res = [];
  for (let i in arr) {
    let length = arr[i].length;
    let sum = 0;
    for (let j in arr[i]) {
      sum += arr[i][j];
    }
    res.push(sum / length);
  }

  return res;
};
