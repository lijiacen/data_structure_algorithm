import { ListNode } from "./ListNode";
namespace leetcode203 {
  function removeElements(head: ListNode | null, val: number): ListNode | null {
    let result = new ListNode(0, head);
    let p = result;
    while (p && p.next) {
      if (p.next.val === val) {
        p.next = p.next.next;
      } else {
        p = p.next;
      }
    }
    return result.next;
  }
}
