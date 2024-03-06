function calculateMaxMeritPoints(T, testCases) {
  const result = [];

  for (let t = 0; t < T; t++) {
    const N = testCases[t].length;
    const dp = Array(N)
      .fill(0)
      .map(() => Array(3).fill(0));

    // Initialize the dynamic programming table
    dp[0][0] = testCases[t][0][0]; // Running
    dp[0][1] = testCases[t][0][1]; // Fighting Practice
    dp[0][2] = testCases[t][0][2]; // Learning New Moves

    for (let i = 1; i < N; i++) {
      dp[i][0] = testCases[t][i][0] + Math.max(dp[i - 1][1], dp[i - 1][2]); // Running
      dp[i][1] = testCases[t][i][1] + Math.max(dp[i - 1][0], dp[i - 1][2]); // Fighting Practice
      dp[i][2] = testCases[t][i][2] + Math.max(dp[i - 1][0], dp[i - 1][1]); // Learning New Moves
    }

    // The result is the maximum value from the last row
    result.push(Math.max(...dp[N - 1]));
  }

  return result;
}

// Sample Input
const T = 2;
const testCases = [
  [
    [1, 2, 5],
    [3, 1, 1],
    [3, 3, 3],
  ],
  [
    [18, 11, 19],
    [4, 13, 7],
    [1, 8, 13],
  ],
];

// Calculate and display the result
const result = calculateMaxMeritPoints(T, testCases);
console.log(result); // Output: [11, 45]
