namespace leetcode203 {
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

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
