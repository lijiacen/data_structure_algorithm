namespace leetcode20 {
  function isValid(s: string): boolean {
    let isVal: boolean = false;
    const stack: Array<string> = [];

    //使用map优化
    let map = new Map<string, string>();
    map.set("(", ")");
    map.set("{", "}");
    map.set("[", "]");

    const length = s.length;
    for (let i = 0; i < length; i++) {
      const str = s.charAt(i);
      if (str === " ") {
        continue;
      }
      //else if (str === "(" || str === "{" || str === "[") {
      else if (map.has(str)) {
        stack.push(str);
      } else {
        const t = stack[stack.length - 1];
        if (map.get(t) === str) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
    if (stack.length === 0) {
      isVal = true;
    }

    return isVal;
  }
}
