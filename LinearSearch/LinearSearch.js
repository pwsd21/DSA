// Linear Search in an Array
const LinearSearch = (arr, target) => {
  if (arr.length === 0) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return arr.indexOf(arr[i]);
    }
  }

  return false;
};

// console.log(LinearSearch([2, 4, 5, 66, 3, 44, 64, 22, 666], 22));

// For STring
const LinearSearch2 = (str, tar) => {
  const arr = str.split("");
  if (arr.length === 0) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == tar) {
      return arr.indexOf(arr[i]);
    }
  }
  return false;
};

// console.log(LinearSearch2("pawsdeqn", "e"));

// Return min/max value in an array
const LinearSearch3 = (arr) => {
  if (arr.length === 0) {
    return -1;
  }
  let ans = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < ans) {
      ans = arr[i];
    }
  }
  return ans;
};

// console.log(LinearSearch3([3, 5, -6, 8, 1, -53, -76, 2]));

// Linear Search in 2D Array
const Search = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === target) {
        return [i, j];
      }
    }
  }
  return -1;
};

// console.log(
//   Search(
//     [
//       [3, 4, 5],
//       [6, 7, 2, 66, 77, 88],
//       [8, 9, 10, 11],
//     ],
//     88
//   )
// );

// Find Min/Max in 2D Array
const SearchMax = (arr) => {
  let maxValue = arr[0][0];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > maxValue) {
        maxValue = arr[i][j];
      }
    }
  }
  return maxValue;
};

// console.log(
//   SearchMax([
//     [3, 4, 5],
//     [6, 7, 2, 66, 770, 88],
//     [8, 9, 10, 11],
//   ])
// );

const EvenSearch = (arr) => {
  // Find Numbers with even number of digits
  let outputArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toString().length % 2 == 0) {
      outputArray.push(arr[i]);
    }
  }
  return outputArray.length;
};

// console.log(EvenSearch([12, 345, 3, 6, 6767]));

// alternately we can count using number of digits in a number also instead of using stringLength

// LEETCODE - Richest Customer question

const RichesCustomer = (arr) => {
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum = sum + arr[i][j];
    }
    if (maxSum < sum) {
      maxSum = sum;
    }
  }
  return maxSum;
};

// console.log(
//   RichesCustomer([
//     [2, 8, 70],
//     [7, 1, 3],
//     [1, 9, 5],
//   ])
// );
