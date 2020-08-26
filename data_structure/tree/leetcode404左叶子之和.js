/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  if (!root) return null;
  let sum = 0;
  const dfs = (root, val) => {
    !root.left && !root.right && (sum += val);
    root.left && dfs(root.left, root.left.val);
    root.right && dfs(root.right, 0);
  };
  dfs(root, 0);
  return sum;
};
