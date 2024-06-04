var findMin = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  let ans = Number.MAX_SAFE_INTEGER;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (nums[start] <= nums[mid]) {
      ans = Math.min(ans, nums[start]);
      start = mid + 1;
    } else {
      end = mid - 1;
      ans = Math.min(ans, nums[mid]);
    }
  }
  return ans;
};
