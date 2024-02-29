// Ignore elements that are -ve or greater than N
const firstMissingPositive = (arr) => {
  let i = 0;
  while (i < arr.length) {
    let correct = arr[i] - 1;
    if (arr[i] != arr[correct] && arr[i] > 0 && arr[i] <= arr.length) {
      swap(arr, i, correct);
    } else {
      i++;
    }
  }
  console.log(arr, "arr");
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] != i + 1) {
      return i + 1;
    }
  }
  return arr.length + 1;
};

const swap = (arr, first, second) => {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
};

console.log(firstMissingPositive([3, 4, -1, 1]));
