var combinationSum = function (candidates, target) {
  // Initialize an array to store the resulting combinations
  const result = [];

  // Define a recursive function to generate combinations
  function permute(arr = [], sum = 0, idx = 0) {
    // Base case: if the current sum exceeds the target, stop exploring this path
    if (sum > target) return;

    // If the current sum equals the target, add the current combination to the result
    if (sum === target) {
      result.push(arr);
      return;
    }

    // Iterate through candidates starting from index idx
    for (let i = idx; i < candidates.length; i++) {
      // Recursive call: include the current candidate in the combination
      // Update the sum and pass the next index to avoid duplicate combinations
      permute([...arr, candidates[i]], sum + candidates[i], i);
    }
  }

  // Start the recursive function with initial parameters
  permute();

  // Return the resulting combinations
  return result;
};
