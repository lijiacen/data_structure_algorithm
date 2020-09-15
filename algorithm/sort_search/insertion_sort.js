function insertion_sort(arr) {
  if (!arr || arr.length <= 1) return arr;

  let length = arr.length;
  for (i = 1; i < length; i++) {
    let temp = arr[i];
    let j = i;
    while (j > 0) {
      if (arr[j - 1] > temp) {
        arr[j] = arr[j - 1];
      } else {
        break;
      }
      j--;
    }
    arr[j] = temp;
  }
  return arr;
}

console.log(insertion_sort([3, 34583, 423, 50, 42340, 545]));
