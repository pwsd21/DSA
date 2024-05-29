var subsetsWithDup = function (nums) {
  // Initialize an array to store the resulting subsets
  const result = [];

  // Sort the input array to handle duplicates efficiently
  nums.sort();

  // Define a depth-first search (DFS) function to generate subsets recursively
  const dfs = (arr, i) => {
    // Base case: if the index i reaches the end of the array, add the current subset to the result
    if (i === nums.length) {
      result.push(arr);
      return;
    }

    // Recursive call: include the current number in the subset
    dfs([...arr, nums[i]], i + 1);

    // Skip duplicates by advancing the index
    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      i++;
    }

    // Recursive call: exclude the current number from the subset
    dfs([...arr], i + 1);
  };

  // Start DFS with an empty subset and index 0
  dfs([], 0);

  // Return the resulting subsets
  return result;
};
