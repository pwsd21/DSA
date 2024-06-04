function findTotalWays(arr, dp, i, s, target, totalSum) {
  // If the target is reached, return 1
  if (s === target && i === arr.length) return 1;

  // If all elements are processed and the target is not reached, return 0
  if (i >= arr.length) return 0;

  // If the result for the current state (i, s + totalSum) has already been computed, return it from the DP table to avoid redundant calculations.
  if (dp[i][s + totalSum] !== -1) return dp[i][s + totalSum];

  // Return the total count of two cases:
  // 1. Consider the current element and add it to the current sum to reach the target.
  // 2. Consider the current element and subtract it from the current sum to reach the target.
  dp[i][s + totalSum] =
    findTotalWays(arr, dp, i + 1, s + arr[i], target, totalSum) +
    findTotalWays(arr, dp, i + 1, s - arr[i], target, totalSum);

  return dp[i][s + totalSum];
}

// Driver Program
function main() {
  const arr = [1, 1, 1, 1, 1];
  let totalSum = 0;
  for (let i = 0; i < arr.length; i++) totalSum += arr[i];

  // Target number
  const target = 3;

  // Create a 2D DP table
  const dp = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    dp[i] = new Array(2 * totalSum + 1).fill(-1);
  }

  console.log(findTotalWays(arr, dp, 0, 0, target, totalSum));
}

main();
