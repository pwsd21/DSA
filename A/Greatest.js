const greatest = (arr) => {
  let max = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log(greatest([5, 3, 9, 1, 7]));
