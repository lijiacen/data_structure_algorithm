namespace leetcode21 {
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }
  function mergeTwoLists(
    l1: ListNode | null,
    l2: ListNode | null
  ): ListNode | null {
    let l3 = new ListNode();
    let p1 = l1;
    let p2 = l2;
    let p3 = l3;
    while (p1 || p2) {
      let v1 = p1 ? p1.val : 0;
      let v2 = p2 ? p2.val : 0;
      if (p1 && p2) {
        if (v1 >= v2) {
          p3.next = new ListNode(v2);
          p2 = p2.next;
          p3 = p3.next;
        } else {
          p3.next = new ListNode(v1);
          p1 = p1.next;
          p3 = p3.next;
        }
      } else {
        if (p1) {
          p3.next = new ListNode(v1);
          p1 = p1.next;
          p3 = p3.next;
        } else if (p2) {
          p3.next = new ListNode(v2);
          p2 = p2.next;
          p3 = p3.next;
        }
      }
    }

    return l3.next;
  }
  let l111: ListNode = {
    val: 3,
    next: null
  };
  let l11: ListNode = {
    val: 2,
    next: l111
  };
  let l1: ListNode = {
    val: 1,
    next: l11
  };

  let l222: ListNode = {
    val: 4,
    next: null
  };
  let l22: ListNode = {
    val: 2,
    next: l222
  };
  let l2: ListNode = {
    val: 1,
    next: l22
  };

  console.log(mergeTwoLists(l1, l2));
}
