import { ListNode } from "./ListNode";
namespace leetcode83 {
  function deleteDuplicates(head: ListNode | null): ListNode | null {
    let p = head;
    let res = null;
    let val = -1;
    if (p) {
      val = p.val;
      res = new ListNode(p.val);
      let r = res;

      while (p) {
        if (val !== p.val) {
          r.next = new ListNode(p.val);
          r = r.next;
        }
        val = p.val;
        p = p.next;
      }
    }

    return res;
  }

  const g: ListNode = {
    val: 5,
    next: null
  };
  const f: ListNode = {
    val: 4,
    next: g
  };
  const e: ListNode = {
    val: 3,
    next: f
  };
  const d: ListNode = {
    val: 2,
    next: e
  };
  const c: ListNode = {
    val: 2,
    next: d
  };

  const b: ListNode = {
    val: 1,
    next: c
  };
  const a: ListNode = {
    val: 1,
    next: b
  };
  //const a1: ListNode = null;
  // console.log(deleteDuplicates(a1));
  console.log(deleteDuplicates(a));
}
