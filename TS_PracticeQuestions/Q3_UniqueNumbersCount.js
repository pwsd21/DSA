// For sorted Array - count number of unique numbers
const unique = (arr) => {
  if (arr.length) {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] != arr[j]) {
        i++;
        arr[i] = arr[j];
      }
    }
    // return arr.slice(0, i + 1); - to return qnique values
    return i + 1;
  } else {
    throw new Error("Empty Array");
  }
};

console.log(unique([1, 1, 2, 2, 4, 4, 5, 5, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]));
