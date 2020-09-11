const MinHeap = require("./min_heap");

var findKthLargest = function (nums, k) {
  let mh = new MinHeap();
  nums.forEach(num => {
    mh.insert(num);
    if (mh.size() > k) {
      mh.pop();
    }
  });
  return mh.peek();
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
