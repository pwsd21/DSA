function maxRodCost(T, testCases) {
  const result = [];

  for (let t = 0; t < T; t++) {
    const N = testCases[t].N;
    const A = testCases[t].A;

    // Create a 1D array to store the maximum cost for each length
    const dp = Array(N + 1).fill(0);

    // Fill the dp array
    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= i; j++) {
        dp[i] = Math.max(dp[i], A[j - 1] + dp[i - j]);
      }
    }

    // The result is the maximum cost for the total length N
    result.push(dp[N]);
  }

  return result;
}

// Sample Input
const T = 2;
const testCases = [
  { N: 5, A: [2, 5, 7, 8, 10] },
  { N: 8, A: [3, 5, 8, 9, 10, 17, 17, 20] },
];

// Calculate and display the result
const result = maxRodCost(T, testCases);
console.log(result); // Output: [12, 24]
