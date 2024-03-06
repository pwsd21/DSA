var longestPalindromeSubseq = function (s) {
  // Initialize a 2D array 'dp' to store computed results for subproblems
  let dp = Array(s.length)
    .fill()
    .map((v) => Array(s.length).fill());

  // Recursive helper function to traverse and find the longest palindromic subsequence
  const traverse = (start, end) => {
    // If the result for this subproblem is already calculated, return it
    if (dp[start][end]) {
      return dp[start][end];
    }

    // Base cases
    if (start > end) {
      dp[start][end] = 0;
    } else if (start === end) {
      dp[start][end] = 1;
    } else if (s[start] === s[end]) {
      // If characters at both ends match, increment the result
      dp[start][end] = traverse(start + 1, end - 1) + 2;
    } else {
      // If characters don't match, take the maximum of two recursive calls
      dp[start][end] = Math.max(
        traverse(start + 1, end),
        traverse(start, end - 1)
      );
    }

    // Memoize the result for the current subproblem
    return dp[start][end];
  };

  // Call the recursive helper function with initial parameters
  const res = traverse(0, s.length - 1);

  // Return the result (if it's not falsy) or default to 1
  return res ? res : 1;
};
