namespace leetcode83_2 {
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  function deleteDuplicates(head: ListNode | null): ListNode | null {
    let p = head;
    while (p && p.next) {
      if (p.val === p.next.val) {
        p.next = p.next.next;
      } else {
        p = p.next;
      }
    }

    return head;
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

  console.log(deleteDuplicates(a));
}
