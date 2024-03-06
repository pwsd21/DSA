// Function to find the longest common subsequence of two strings
var longestCommonSubsequence = function (text1, text2) {
  // Create a memoization map to store computed results for subproblems
  const memo = new Map();

  // Call the recursive helper function to find the LCS
  return recursion(text1, text2, text1.length - 1, text2.length - 1, memo);
};

// Recursive helper function to find the LCS using memoization
function recursion(text1, text2, index1, index2, memo) {
  // Base cases: if either index is less than 0, return 0
  if (index1 < 0 || index2 < 0) return 0;

  // Create a unique key for the current subproblem using indices
  const key = index1 + "#" + index2;

  // Check if the result for this subproblem is already memoized
  if (memo.has(key)) return memo.get(key);

  let result;

  // If the characters at the current indices match
  if (text1.charAt(index1) === text2.charAt(index2)) {
    // Recursively call with reduced indices and increment the result
    result = recursion(text1, text2, index1 - 1, index2 - 1, memo) + 1;
  } else {
    // If characters don't match, take the maximum of two recursive calls
    result = Math.max(
      recursion(text1, text2, index1, index2 - 1, memo),
      recursion(text1, text2, index1 - 1, index2, memo)
    );
  }

  // Memoize the result for the current subproblem
  memo.set(key, result);

  // Return the computed result
  return result;
}
