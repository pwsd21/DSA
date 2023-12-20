// O(n^2)
const sumZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};

// console.log(sumZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]));

// O(n)
const sumZero2 = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    sum = arr[start] + arr[end];
    if (sum === 0) {
      return [arr[start], arr[end]];
    } else if (sum > 0) {
      end--;
    } else {
      start++;
    }
  }
};

// console.log(sumZero2([-5, -4, -3, -2, 0, 2, 4, 6, 8]));

// O(n)
const recursiveSumZero = (arr, start, end) => {
  if (start >= end) {
    return "Not Found";
  }
  let sum = arr[start] + arr[end];
  if (sum === 0) {
    return [arr[start], arr[end]];
  } else if (sum > 0) {
    return recursiveSumZero(arr, 0, end - 1);
  } else {
    return recursiveSumZero(arr, start + 1, end);
  }
};

const arr = [-5, -4, -3, -2, 0, 2, 4, 6, 8];
console.log(recursiveSumZero(arr, 0, arr.length - 1));
