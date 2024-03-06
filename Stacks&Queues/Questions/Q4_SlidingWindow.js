var maxSlidingWindow = function (nums, k) {
  let q = [];
  let res = [];
  let n = nums.length;
  if (k == 1) return nums;
  if (nums.length == 1) return nums;

  for (let i = 0; i < n; i++) {
    while (q.length != 0 && nums[q[q.length - 1]] <= nums[i]) {
      q.pop();
    }
    q.push(i);
    if (q[0] <= i - k) q.shift();

    if (i >= k - 1) res.push(nums[q[0]]);
  }
  return res;
};
