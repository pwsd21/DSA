function knapsack(T, testCases) {
  const result = [];

  for (let t = 0; t < T; t++) {
    const N = testCases[t].N;
    const weights = testCases[t].weights;
    const values = testCases[t].values;
    const W = testCases[t].W;

    // Create a 2D array to store the maximum value for each weight and item
    const dp = Array(N + 1)
      .fill()
      .map(() => Array(W + 1).fill(0));

    // Fill the dp table
    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= W; j++) {
        if (weights[i - 1] <= j) {
          dp[i][j] = Math.max(
            dp[i - 1][j],
            values[i - 1] + dp[i - 1][j - weights[i - 1]]
          );
        } else {
          dp[i][j] = dp[i - 1][j];
        }
      }
    }

    // The result is the value in the bottom-right cell of the dp table
    result.push(dp[N][W]);
  }

  return result;
}

// Sample Input
const T = 1;
const testCases = [
  {
    N: 4,
    weights: [1, 2, 4, 5],
    values: [5, 4, 8, 6],
    W: 5,
  },
];

// Calculate and display the result
const result = knapsack(T, testCases);
console.log(result); // Output: [13]
