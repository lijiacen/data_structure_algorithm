namespace leetcode234 {
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }
  function isPalindrome(head: ListNode | null): boolean {
    let p = head;
    let arr = [];

    while (p) {
      arr.push(p.val);
      p = p.next;
    }

    while (arr.length > 0) {
      if (arr.length === 1) {
        return true;
      }
      if (arr.pop() !== arr.shift()) {
        return false;
      }
    }

    return true;
  }
}
