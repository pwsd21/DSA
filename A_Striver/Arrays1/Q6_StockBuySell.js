const buySell = (arr) => {
  let min = arr[0];
  let maxDiff = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > min) {
      maxDiff = Math.max(maxDiff, arr[i] - min);
    } else {
      min = arr[i];
    }
  }
  return maxDiff;
};

console.log(buySell([7, 1, 5, 3, 6, 4]));
