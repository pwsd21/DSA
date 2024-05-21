// BEST APPROACH USING MAP

function twoSumm(nums, target) {
  const numIndices = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numIndices.has(complement)) {
      return [numIndices.get(complement), i];
    }

    numIndices.set(nums[i], i);
  }

  return null; // If no solution is found
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
