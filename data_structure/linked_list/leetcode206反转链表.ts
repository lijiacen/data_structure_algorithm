import { ListNode } from "./ListNode";
namespace leetcode206 {
  let e: ListNode = {
    val: 5,
    next: null
  };
  let d: ListNode = {
    val: 4,
    next: e
  };
  let c: ListNode = {
    val: 3,
    next: d
  };
  let b: ListNode = {
    val: 2,
    next: c
  };
  let head: ListNode = {
    val: 1,
    next: b
  };

  function reverseList(head: ListNode | null): ListNode | null {
    let p1 = head;
    let p2 = null;
    while (p1) {
      let temp = p1.next;
      p1.next = p2;
      p2 = p1;
      p1 = temp;
    }

    return p2;
  }
  console.log(reverseList(head));
}
