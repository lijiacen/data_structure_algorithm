let binaryTree = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: { val: 5, left: null, right: null }
  },
  right: {
    val: 3,
    left: { val: 6, left: null, right: null },
    right: { val: 7, left: null, right: null }
  }
};

/**
 * 二叉树先序遍历
 * 1)访问根节点
 * 2)对根节点的左子树先序遍历
 * 3)对根节点的右子树先序遍历
 */
const preOrder = (root) => {
  console.log(root.val);
  root.left && preOrder(root.left);
  root.right && preOrder(root.right);
};
preOrder(binaryTree);

/**
 * 二叉树中序遍历
 * 1)对根节点的左子树中序遍历
 * 2)访问根节点
 * 3)对根节点的右子树中序遍历
 */
const inOrder = (root) => {
  root.left && inOrder(root.left);
  console.log(root.val);
  root.right && inOrder(root.right);
};
inOrder(binaryTree);

/**
 * 二叉树后序遍历
 * 1)对根节点的左子树后序遍历
 * 2)对根节点的右子树后序遍历
 * 3)访问根节点
 */
const postOrder = (root) => {
  root.left && postOrder(root.left);
  root.right && postOrder(root.right);
  console.log(root.val);
};
postOrder(binaryTree);
