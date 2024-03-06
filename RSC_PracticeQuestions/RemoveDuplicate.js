// remove duplicates from sorted array - inplace approach

// 2- Pointer Approach
const findDuplicates = (arr) => {
  if (arr.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] != arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  //   return arr.slice(0, i + 1);
  return i + 1;
};

console.log(findDuplicates([0, 0, 1, 1, 1, 2, 3, 3, 4]));

// Basic Approach
const removeDuplicates = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i + 1, 1);
      i--;
    }
  }
  return arr.length;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 3, 3, 4]));

// CGPT
function removeDuplicat(arr) {
  let uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
}

// Example Usage:
const inputArray = [1, 2, 2, 3, 4, 4, 4, 5, 5];
const resultArray = removeDuplicat(inputArray);

console.log(resultArray);
