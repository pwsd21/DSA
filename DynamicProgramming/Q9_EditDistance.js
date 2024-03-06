var minDistance = function (word1, word2) {
  // Initialize a 2D array 'dp' to store computed results for subproblems
  let dp = Array(word1.length + 1)
    .fill(null)
    .map(() => Array(word2.length + 1).fill(0));

  // Initialize the base cases for the first row and column
  for (let i = 0; i < dp.length; i++) {
    dp[i][0] = i; // Transforming an empty string to word1
  }

  for (let i = 0; i < dp[0].length; i++) {
    dp[0][i] = i; // Transforming word1 to an empty string
  }

  // Fill in the rest of the dp array using dynamic programming approach
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1, // Deletion (left)
        dp[i][j - 1] + 1, // Insertion (up)
        dp[i - 1][j - 1] + (word1[i - 1] !== word2[j - 1] ? 1 : 0) // Substitution (diagonal)
      );
    }
  }

  // The bottom-right cell of dp contains the minimum distance
  return dp[dp.length - 1][dp[0].length - 1];
};
