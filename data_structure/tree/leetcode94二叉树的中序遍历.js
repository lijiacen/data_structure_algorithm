var inorderTraversal = function (root) {
  let res = [];
  const inOrder = (root) => {
    if (!root) {
      return [];
    }
    root.left && inOrder(root.left);
    res.push(root.val);
    root.right && inOrder(root.right);
  };
  inOrder(root);
  return res;
};
