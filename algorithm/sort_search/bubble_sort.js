function bubbe_sort(arr) {
  if (!arr || arr.length <= 1) return arr;

  let length = arr.length;
  for (i = 0; i < length - 1; i++) {
    for (j = 0; j < length - 1 + i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbe_sort([3, 34583, 423, 50, 42340, 545]));
