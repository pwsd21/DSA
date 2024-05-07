const missingNumber = (arr) => {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] != i && arr[i] < arr.length) {
      swap(arr, i, arr[i]);
    } else {
      i++;
    }
  }
  console.log(arr, "arrrrrr");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != i) {
      return i;
    }
  }
  return arr.length;
};

const swap = (arr, first, second) => {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));

// Alternate

const missingDigit = (arr) => {
  let n = arr.length;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum = actualSum + arr[i];
  }
  return expectedSum - actualSum;
};

console.log(missingDigit([9, 6, 4, 2, 3, 5, 7, 0, 1]));
