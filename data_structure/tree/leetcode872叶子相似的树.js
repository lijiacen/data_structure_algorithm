/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  if (!root1 || !root2) return false;

  let res = true;
  let arr1 = tree2Array(root1);
  let arr2 = tree2Array(root2);
  console.log(arr1, arr2);
  if (arr1.length === 0 && arr2.length === 0) {
    console.log(arr1.length, arr2.length);
    return (res = true);
  } else if (arr1.length !== arr2.length) {
    return (res = false);
  } else {
    console.log(33);
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return (res = false);
      }
    }
  }
  return res;
};

function tree2Array(root) {
  let array = [];
  const dfs = (root) => {
    !root.left && !root.right && array.push(root.val);
    root.left && dfs(root.left);
    root.right && dfs(root.right);
  };
  dfs(root);
  return array;
}

let root1 = {
  val: 1,
  left: { val: 2, left: null, right: null },
  right: { val: 3, left: null, right: null }
};
let root2 = {
  val: 1,
  left: { val: 3, left: null, right: null },
  right: { val: 2, left: null, right: null }
};
console.log(leafSimilar(root1, root2));
