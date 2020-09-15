function selection_sort(arr) {
  if (!arr || arr.length <= 1) return arr;

  let length = arr.length;
  for (i = 0; i < length - 1; i++) {
    for (j = i; j < length - 1; j++) {
      if (arr[i] > arr[j + 1]) {
        let temp = arr[i];
        arr[i] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(selection_sort([3, 34583, 423, 50, 42340, 545]));
