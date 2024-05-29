var permute = function (nums) {
  // Base case: if the array contains only one element, return it as a permutation
  if (nums.length <= 1) return [nums];

  // Remove the last element from the array
  let val = nums.pop();
  // Recursively generate permutations for the remaining elements
  let prevRes = permute(nums);
  // Initialize an array to store the resulting permutations
  let result = [];

  // Iterate over each permutation generated for the remaining elements
  for (let res of prevRes) {
    // Iterate over possible positions to insert the removed element
    for (let index = 0; index <= res.length; index++) {
      // Create a copy of the current permutation
      let nRes = Array.from(res);
      // Insert the removed element at the current position
      nRes.splice(index, 0, val);
      // Add the modified permutation to the result
      result.push(nRes);
    }
  }

  // Return the resulting permutations
  return result;
};
