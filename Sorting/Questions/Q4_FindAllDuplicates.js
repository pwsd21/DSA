const findAllDuplicates = (arr) => {
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
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] != j + 1) {
      finalArray.push(arr[j]);
    }
  }
  return finalArray;
};

const swap = (arr, first, second) => {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
};

console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 3, 7, 1]));
