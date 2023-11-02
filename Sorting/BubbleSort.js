const BubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
};

console.log(BubbleSort([3, 1, 4, 5, 2, 7, 8, 9, 44, 32, 21]));
