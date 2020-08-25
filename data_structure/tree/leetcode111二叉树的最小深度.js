function minDepth(root) {
  if (!root) {
    return 0;
  }
  let res = 0;
  const queue = [[root, 1]];
  while (queue.length) {
    let [r, l] = queue.shift();
    if (r && !r.left && !r.right) {
      res = l;
      break;
    }
    r && r.left && queue.push([r.left, l + 1]);
    r && r.right && queue.push([r.right, l + 1]);
  }
  return res;
}
