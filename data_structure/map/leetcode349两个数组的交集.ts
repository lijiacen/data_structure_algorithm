namespace leetcode349 {
  function arrToMap(nums: number[]): Map<number, number> {
    let result = new Map<number, number>();
    nums &&
      nums.forEach((i) => {
        result.set(i, i);
      });
    return result;
  }

  function intersection(nums1: number[], nums2: number[]): number[] {
    let map1 = arrToMap(nums1);
    let map2 = arrToMap(nums2);
    let arr = [];
    for (let [k, v] of map1) {
      map2.has(k) && arr.push(k);
    }
    return arr;
  }

  let nums1 = [1, 2, 2, 1];
  let nums2 = [2, 2];
  console.log(intersection(nums1, nums2));
}
