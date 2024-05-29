const trap = (height) => {
  // Initialize two pointers, left and right, at the beginning and end of the height array
  let left = 0;
  let right = height.length - 1;
  // Initialize a variable to store the total trapped water
  let res = 0;
  // Initialize variables to keep track of the maximum height encountered from the left and right directions
  let leftMax = 0;
  let rightMax = 0;

  // Iterate until the left pointer crosses the right pointer
  while (left <= right) {
    // If the height of the block at the left pointer is less than or equal to the height of the block at the right pointer
    if (height[left] <= height[right]) {
      // Check if the current block's height is greater than or equal to the maximum height encountered from the left direction
      if (height[left] >= leftMax) {
        // Update the maximum height encountered from the left direction
        leftMax = height[left];
      } else {
        // Add the difference between the maximum height encountered from the left direction and the height of the current block to the result
        res += leftMax - height[left];
      }
      // Move the left pointer to the right
      left++;
    } else {
      // If the height of the block at the right pointer is greater than the height of the block at the left pointer
      // Check if the current block's height is greater than or equal to the maximum height encountered from the right direction
      if (height[right] >= rightMax) {
        // Update the maximum height encountered from the right direction
        rightMax = height[right];
      } else {
        // Add the difference between the maximum height encountered from the right direction and the height of the current block to the result
        res += rightMax - height[right];
      }
      // Move the right pointer to the left
      right--;
    }
  }
  // Return the total trapped water
  return res;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6
