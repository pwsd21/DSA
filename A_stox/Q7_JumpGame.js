var canJump = function (nums) {
  let idx = 0;
  let max = 0;
  let target = nums.length - 1;

  while (idx < nums.length) {
    // Update the maximum index that can be reached
    max = Math.max(max, idx + nums[idx]);

    // If the maximum index that can be reached is greater than or equal to the target, return true
    if (max >= target) {
      return true;
    }

    // If the maximum index that can be reached is not increasing and the current number is 0, return false
    if (max <= idx && nums[idx] === 0) {
      return false;
    }

    // Move to the next index
    idx++;
  }

  // If the loop completes without returning true, return false
  return false;
};
