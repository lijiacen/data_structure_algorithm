import { ListNode } from "./ListNode";
namespace leetcode234 {
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
