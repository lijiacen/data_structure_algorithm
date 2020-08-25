/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  const res = [];
  const queue = [[root, 0]];
  while (queue.length) {
    let [r, l] = queue.shift();
    res[l] ? res[l].push(r.val) : (res[l] = [r.val]);
    r.left && queue.push([r.left, l + 1]);
    r.right && queue.push([r.right, l + 1]);
  }
  return res;
};
