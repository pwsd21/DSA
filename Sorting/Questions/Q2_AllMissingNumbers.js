// Cyclic Sort

const allMissingNumbers = (arr) => {
  let i = 0;
  let finalArray = [];
  while (i < arr.length) {
    let correct = arr[i] - 1;
    if (arr[i] != arr[correct]) {
      swap(arr, i, correct);
    } else {
      i++;
    }
  }
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != i + 1) {
      finalArray.push(i + 1);
    }
  }
  return finalArray;
};

const swap = (arr, first, second) => {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
};

console.log(allMissingNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
