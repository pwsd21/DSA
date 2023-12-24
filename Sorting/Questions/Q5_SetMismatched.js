const findErrorNums = (arr) => {
  let i = 0;
  while (i < arr.length) {
    let correct = arr[i] - 1;
    if (arr[i] != arr[correct]) {
      swap(arr, i, correct);
    } else {
      i++;
    }
  }
  let finalArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != i + 1) {
      finalArray.push(arr[i], i + 1);
    }
  }
  return finalArray;
};

const swap = (arr, first, second) => {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
};

console.log(findErrorNums([2, 1, 4, 2, 6, 5]));
