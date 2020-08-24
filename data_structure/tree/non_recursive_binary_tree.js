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
  const stack = [root];
  while (stack.length) {
    const n = stack.pop();
    console.log(n.val);
    n.right && stack.push(n.right);
    n.left && stack.push(n.left);
  }
};
// preOrder(binaryTree);

/**
 * 二叉树中序遍历
 * 1)对根节点的左子树中序遍历
 * 2)访问根节点
 * 3)对根节点的右子树中序遍历
 */
const inOrder = (root) => {
  const stack = [];
  let p = root;
  while (stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    const n = stack.pop();
    console.log(n.val);
    p = n.right;
  }
};
// inOrder(binaryTree);

/**
 * 二叉树后序遍历
 * 1)对根节点的左子树后序遍历
 * 2)对根节点的右子树后序遍历
 * 3)访问根节点
 */
const postOrder = (root) => {
  const outputStack = [];
  const stack = [root];
  while (stack.length) {
    const n = stack.pop();
    outputStack.push(n);
    n.left && stack.push(n.left);
    n.right && stack.push(n.right);
  }
  while (outputStack.length) {
    console.log(outputStack.pop().val);
  }
};
postOrder(binaryTree);
