const kadene = (arr) => {
  const curSum = arr[0];
  const maxSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    curSum = Math.max(arr[i], curSum + arr[i]);
    maxSum = Math.max(maxSum, curSum);
  }
  return maxSum;
};
