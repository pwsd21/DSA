// Ignore elements that are -ve or greater than N
const firstMissingPositive = (nums) => {
  let i = 0;
  while (i < nums.length) {
    let correct = nums[i] - 1;
    if (nums[i] != nums[correct] && nums[i] > 0 && nums[i] <= nums.length) {
      swap(nums, i, correct);
    } else {
      i++;
    }
  }
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] != i + 1) {
      return i + 1;
    }
  }
  return nums.length + 1;
};

const swap = (nums, first, second) => {
  let temp = nums[first];
  nums[first] = nums[second];
  nums[second] = temp;
};

console.log(firstMissingPositive([3, 4, -1, 1]));
