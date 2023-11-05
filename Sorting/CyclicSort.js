const CyclicSort = (arr) => {
  let i = 0;
  while (i < arr.length) {
    let correct = arr[i] - 1;
    if (arr[i] != arr[correct]) {
      swap(arr, i, correct);
    } else {
      i++;
    }
  }
  return arr;
};

const swap = (arr, first, second) => {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
};

console.log(CyclicSort([4, 1, 3, 5, 2, 9, 7, 8, 6]));
