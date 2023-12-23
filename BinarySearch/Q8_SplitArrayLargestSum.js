const canBeSplit = (nums, maximumSum, k) => {
  let currSum = 0,
    parts = 1;
  for (const num of nums) {
    currSum += num;
    if (currSum > maximumSum) {
      currSum = num;
      parts++;
    }
    if (parts > k) {
      return false;
    }
  }
  return true;
};

const splitArray = (nums, k) => {
  let start = Math.max(...nums),
    end = nums.reduce((a, b) => a + b);
  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (canBeSplit(nums, mid, k)) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return start;
};
console.log(splitArray([7, 2, 5, 10, 8], 2));
