//instanceof 原理
function isInstanceOf(A, B) {
  let p = A;
  while (p) {
    if (p.__proto__ === B.prototype) {
      return true;
    } else {
      p = p.__proto__;
    }
  }
  return false;
}

let obj = {};
let arr = [];
let func = () => {};
console.log(isInstanceOf(obj, Function));
console.log(isInstanceOf(obj, Object));
console.log(isInstanceOf(obj, Array));

console.log(isInstanceOf(arr, Function));
console.log(isInstanceOf(arr, Object));
console.log(isInstanceOf(arr, Array));

console.log(isInstanceOf(func, Function));
console.log(isInstanceOf(func, Object));
console.log(isInstanceOf(func, Array));

//使用链表指针获取JSON节点值
const json = {
  a: { b: { c: 1 } },
  d: { e: 2 }
};
const path = ["a", "b", "c"];

function getResultByPath(json, path) {
  let p = json;
  path.forEach((k) => {
    p = p[k];
  });
  return p;
}
console.log(getResultByPath(json, path));
