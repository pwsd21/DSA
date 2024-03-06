const lengthOfLIS = (nums) => {
  // Array to store the length of longest increasing subsequence ending at each index
  let dp = new Array(nums.length).fill(1);

  // Variable to track the overall longest increasing subsequence length
  let longest = 1;

  // Iterate over each element in the array
  for (let i = 1; i < nums.length; i++) {
    // Iterate over elements before the current index
    for (let j = 0; j < i; j++) {
      // Check if the current element is greater than the previous elements
      if (nums[j] < nums[i]) {
        // Update the length of the increasing subsequence
        dp[i] = Math.max(dp[i], dp[j] + 1);

        // Update the overall longest increasing subsequence length
        longest = Math.max(longest, dp[i]);
      }
    }
  }

  // Return the length of the longest increasing subsequence
  return longest;
};
