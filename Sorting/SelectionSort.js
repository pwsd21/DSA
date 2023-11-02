const SelectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let last = arr.length - i - 1;
    let maxIndex = getMaxIndex(arr, 0, last);
    swap(arr, maxIndex, last);
  }
  return arr;
};

const getMaxIndex = (arr, start, end) => {
  let max = start;
  for (let i = start; i <= end; i++) {
    if (arr[max] < arr[i]) {
      max = i;
    }
  }
  return max;
};

const swap = (arr, first, second) => {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
};

console.log(SelectionSort([4, 1, -5, -8, 34]));
