//https://leetcode-cn.com/problems/valid-parentheses/
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

function isValid(s: string): boolean {
  let isVal: boolean = false;
  const stack: Array<String> = [];

  const length = s.length;
  for (let i = 0; i < length; i++) {
    const str = s.charAt(i);
    if (str === " ") {
      continue;
    } else if (str === "(" || str === "{" || str === "[") {
      stack.push(str);
    } else if (str === "}") {
      if (stack.pop() !== "{") {
        return false;
      }
    } else if (str === ")") {
      if (stack.pop() !== "(") {
        return false;
      }
    } else if (str === "]") {
      if (stack.pop() !== "[") {
        return false;
      }
    }
  }
  if (stack.length === 0) {
    isVal = true;
  }

  return isVal;
}
