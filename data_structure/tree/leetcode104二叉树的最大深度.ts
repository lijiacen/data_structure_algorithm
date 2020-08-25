namespace leetcode104 {
  function maxDepth(root: TreeNode | null): number {
    let res = 0;
    const dfs = (tn: TreeNode, l: number) => {
      if (tn) {
        !tn.left && !tn.right && (res = Math.max(res, l));
        tn.left && dfs(tn.left, l + 1);
        tn.right && dfs(tn.right, l + 1);
      }
    };
    root && dfs(root, 1);
    return res;
  }
}
