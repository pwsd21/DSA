/**
 * @param {number[]} candidates - The array of candidate numbers
 * @param {number} target - The target sum to achieve
 * @return {number[][]} - Array of unique combinations of numbers that sum up to the target
 */
var combinationSum2 = function (candidates, target) {
  // Sort the candidates array to handle duplicates efficiently
  candidates.sort((a, b) => a - b);

  // Initialize an array to store the resulting combinations
  let ans = [];

  // Define a helper function to generate combinations recursively
  function helper(sum, idx, arr) {
    // Base case: if the current sum equals 0, add the current combination to the result
    if (sum === 0) {
      ans.push([...arr]);
      return;
    }

    // Base case: if the current sum is negative, stop exploring this path
    if (sum < 0) return;

    // Iterate through candidates starting from index idx
    for (let i = idx; i < candidates.length; i++) {
      // Avoid duplicate combinations by skipping over the same candidate value
      // We only allow the first occurrence of a candidate value to be used in each combination
      if (i !== idx && candidates[i] === candidates[i - 1]) continue;

      // Recursive call: include the current candidate in the combination
      // Update the sum and pass the next index to avoid duplicate combinations
      helper(sum - candidates[i], i + 1, [...arr, candidates[i]]);
    }
  }

  // Start the recursive function with initial parameters
  helper(target, 0, []);

  // Return the resulting combinations
  return ans;
};
