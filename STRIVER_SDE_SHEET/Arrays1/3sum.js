// O(n) & O(n)
var threeSum = function (nums) {
  // Sort the input array in ascending order
  nums.sort((a, b) => a - b);
  // Get the length of the array
  let n = nums.length;

  // Initialize an empty array to store the result
  let result = [];

  // Iterate through the array
  for (let i = 0; i < n; i++) {
    // Skip duplicates by checking if the current number is the same as the previous one
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // Initialize two pointers, left and right
    let left = i + 1;
    let right = n - 1;

    // Iterate until the left pointer is less than the right pointer
    while (left < right) {
      // Calculate the sum of the current triplet
      let tripletSum = nums[i] + nums[left] + nums[right];

      // If the sum is zero, add the triplet to the result array
      if (tripletSum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        // Skip duplicates of left and right pointers
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      }
      // If the sum is less than zero, move the left pointer to the right
      else if (tripletSum < 0) {
        left++;
      }
      // If the sum is greater than zero, move the right pointer to the left
      else {
        right--;
      }
    }
  }

  // Return the array of unique triplets
  return result;
};
