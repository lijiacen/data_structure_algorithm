namespace index {
  interface LinkedList {
    val: String;
    next: LinkedList;
  }
  const d: LinkedList = {
    val: "d",
    next: null
  };
  const c: LinkedList = {
    val: "c",
    next: d
  };
  const b: LinkedList = {
    val: "b",
    next: c
  };
  const a: LinkedList = {
    val: "a",
    next: b
  };

  //遍历链表
  let p = a;
  while (p) {
    console.log(p.val);
    p = p.next;
  }

  console.log("c和d中间插入e");
  //c和d中间插入e
  let e: LinkedList = {
    val: "e",
    next: d
  };
  c.next = e;

  //遍历链表
  let point = a;
  while (point) {
    console.log(point.val);
    point = point.next;
  }

  console.log("删除e");
  c.next = d;
  //遍历链表
  let point_d = a;
  while (point_d) {
    console.log(point_d.val);
    point_d = point_d.next;
  }
}
