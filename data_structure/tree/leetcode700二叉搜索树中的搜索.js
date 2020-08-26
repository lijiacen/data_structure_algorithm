/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (!root) return null;
  let res = null;
  const dfs = (root) => {
    if (root.val === val) {
      return (res = root);
    }
    root.left && dfs(root.left);
    root.right && dfs(root.right);
  };
  dfs(root);
  return res;
};
