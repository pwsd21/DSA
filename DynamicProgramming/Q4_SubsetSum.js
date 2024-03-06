function subsetSumExists(T, testCases) {
  const result = [];

  for (let t = 0; t < T; t++) {
    const N = testCases[t].length;
    const K = testCases[t][N - 1];
    const arr = testCases[t].slice(0, N - 1);

    // Create a 2D array to store the subset sum information
    const dp = Array(N + 1)
      .fill()
      .map(() => Array(K + 1).fill(false));

    // Initialize the first column (sum 0) as true
    for (let i = 0; i <= N; i++) {
      dp[i][0] = true;
    }

    // Fill the dp table
    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= K; j++) {
        if (arr[i - 1] <= j) {
          dp[i][j] = dp[i - 1][j] || dp[i - 1][j - arr[i - 1]];
        } else {
          dp[i][j] = dp[i - 1][j];
        }
      }
    }

    // The result is the value in the bottom-right cell of the dp table
    result.push(dp[N][K]);
  }

  return result;
}

// Sample Input
const T = 2;
const testCases = [
  [4, 3, 2, 1, 5],
  [2, 5, 1, 6, 7, 4],
];

// Calculate and display the result
const result = subsetSumExists(T, testCases);
console.log(result); // Output: [true, false]
