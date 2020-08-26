var mirrorTree = function (root) {
  if (!root) return null;
  const dfs = (root) => {
    let tem = root.left;
    root.left = root.right;
    root.right = tem;
    root.left && dfs(root.left);
    root.right && dfs(root.right);
  };
  dfs(root);
  return root;
};
