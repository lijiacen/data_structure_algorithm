let tree = {
  val: "a",
  children: [
    {
      val: "b",
      children: [
        { val: "d", children: [] },
        { val: "e", children: [] }
      ]
    },
    {
      val: "c",
      children: [
        { val: "f", children: [] },
        { val: "g", children: [] }
      ]
    }
  ]
};

/**
 * 深度优先遍历：尽可能深的搜索树的分支
 * 1)访问根节点
 * 2)对根节点的children挨个进行深度优先遍历
 */
const dfs = (root) => {
  console.log(root.val);
  root.children.forEach(dfs);
};
console.log(dfs(tree));

/**
 * 广度优先遍历：先访问离根节点最近的节点
 * 1)新建队列
 * 2)把队头出队并访问
 * 3)把队头的children挨个入队
 * 4)重复2，3直到队列为空
 */
const bfs = (root) => {
  const queue = [root];
  while (queue.length) {
    let r = queue.shift();
    console.log(r.val);
    r.children.forEach((child) => {
      queue.push(child);
    });
  }
};
console.log(bfs(tree));
