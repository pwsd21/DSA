// const findDuplicate = (arr) => {
//   let i = 0;
//   while (i < arr.length) {
//     let correct = arr[i] - 1;
//     if (arr[i] != arr[correct]) {
//       swap(arr, i, correct);
//     } else {
//       i++;
//     }
//   }
//   return arr[arr.length - 1];
// };

// Alternate

const findDuplicate = (arr) => {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] != i + 1) {
      let correct = arr[i] - 1;
      if (arr[i] != arr[correct]) {
        swap(arr, i, correct);
      } else {
        return arr[i];
      }
    } else {
      i++;
    }
  }
  return -1;
};

const swap = (arr, first, second) => {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
};

console.log(findDuplicate([1, 4, 4, 3, 2, 5, 6, 7, 8, 9]));
