// For sorted Array
const unique = (arr) => {
  if (arr.length) {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] != arr[j]) {
        i++;
        arr[i] = arr[j];
      }
    }
    return i + 1;
  } else {
    throw new Error("Empty Array");
  }
};

console.log(
  unique([1, 1, 2, 2, 3, 4, 4, 5, 5, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8])
);
