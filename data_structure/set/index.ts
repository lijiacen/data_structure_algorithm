//去重
const arr: Array<Number> = [1, 1, 2, 3, 3, 4];
const set: Set<Number> = new Set(arr);
// console.log(set);

//判断元素是否在集合中
const has1: boolean = set.has(1);
const has6: boolean = set.has(6);
// console.log(has1);
// console.log(has6);

//求元素交集
const arr2: Array<Number> = [3, 3, 4, 4, 5, 6];
const set2: Set<Number> = new Set(arr2);
const arr3: Array<Number> = [];
const set3: Set<Number> = new Set(arr3);

set.forEach((i) => {
  set2.has(i) && set3.add(i);
});

console.log(set3);
