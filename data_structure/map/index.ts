let map = new Map<number, string>();
map.set(1, "a");
map.set(1, "b");
map.set(2, "c");
map.set(3, "d");

console.log(map);
console.log(map.get(2));
console.log(map.delete(3)); //删除
console.log(map);

console.log(map.clear()); //删除所有
console.log(map);
