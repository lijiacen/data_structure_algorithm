import { ListNode } from "./ListNode";

namespace leetcode2 {
  let l1: ListNode = new ListNode(2, new ListNode(4, new ListNode(3, null)));
  let l2: ListNode = new ListNode(5, new ListNode(6, new ListNode(4, null)));

  function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
  ): ListNode | null {
    let l3: ListNode = new ListNode();
    let p1 = l1;
    let p2 = l2;
    let p3 = l3;
    let carry = 0;
    while (p1 || p2) {
      const v1 = p1 ? p1.val : 0;
      const v2 = p2 ? p2.val : 0;
      const v3 = v1 + v2 + carry;
      carry = Math.floor(v3 / 10);
      p3.next = new ListNode(v3 % 10);
      p1 && (p1 = p1.next);
      p2 && (p2 = p2.next);
      p3 = p3.next;
    }

    return l3.next;
  }

  console.log(addTwoNumbers(l1, l2));
}
