namespace es6 {
  let set = new Set<string>();
  set.add("inter milan"); //添加
  set.add("chealse"); //添加
  set.add("man city"); //添加
  set.add("man city"); //添加(不允许重复)

  // 判断是否存在
  // console.log(set.has("chealse"));
  // console.log(set.has("inter milan"));
  // console.log(set.has("man city"));
  // console.log(set.has("man unite"));

  // console.log(set);
  // console.log(set.size); //获取长度
  //删除
  set.delete("man city");
  // console.log(set);
  // console.log(set.size);

  //迭代
  set.forEach((i) => {
    //console.log(i);
  });
  for (let [k, v] of set.entries()) {
    //console.log(k, v);
  }

  let array = [...set]; // set转换为数组
  let array2 = Array.from(set); // set转换为数组
  let set2 = new Set(array2); //数组转换为set
  // console.log(array);
  // console.log(array2);
  // console.log(set2);

  //set求交集

  let set_a = new Set<number>([1, 2, 3, 4]);
  let set_b = new Set<number>([3, 4, 5, 6]);

  //交集
  const intersection = [...set_a].filter((i) => {
    return set_b.has(i);
  });
  console.log(new Set(intersection));

  //差集
  const difference = [...set_a].filter((i) => {
    return !set_b.has(i);
  });
  console.log(new Set(difference));
}
