namespace leetcode349 {
  function intersection(nums1: number[], nums2: number[]): number[] {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let set: Set<number> = new Set([]);
    set1.forEach((i) => {
      set2.has(i) && set.add(i);
    });

    let numbers: number[] = [];
    set.forEach((i) => {
      numbers.push(i);
    });
    return numbers;
  }

  let nums1 = [1, 2, 2, 1];
  let nums2 = [2, 2];
  console.log(intersection(nums1, nums2));
}
