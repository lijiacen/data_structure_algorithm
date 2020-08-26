/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  let res = true;
  const dfs = (p, q) => {
    if (p.val !== q.val) return (res = false);

    if (p.left && q.left) {
      dfs(p.left, q.left);
    } else if (!p.left && !q.left) {
    } else {
      return (res = false);
    }
    if (p.right && q.right) {
      dfs(p.right, q.right);
    } else if (!p.right && !q.right) {
    } else {
      return (res = false);
    }
  };
  dfs(p, q);
  return res;
};
