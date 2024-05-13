function maxProductSubArray(arr) {
  let n = arr.length; // size of array.

  let pre = 1,
    suff = 1;
  let ans = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    if (pre === 0) pre = 1;
    if (suff === 0) suff = 1;
    pre *= arr[i];
    suff *= arr[n - i - 1];
    ans = Math.max(ans, Math.max(pre, suff));
  }
  return ans;
}

let arr = [1, 2, -3, 0, -4, -5];
console.log("The maximum product subarray is: " + maxProductSubArray(arr));

// Using DP - Kadene's Algorithm

function maxProduct(nums) {
  let prod1 = nums[0],
    prod2 = nums[0],
    result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let temp = Math.max(nums[i], prod1 * nums[i], prod2 * nums[i]);
    prod2 = Math.min(nums[i], prod1 * nums[i], prod2 * nums[i]);
    prod1 = temp;

    result = Math.max(result, prod1);
  }

  return result;
}

let nums = [1, 2, -3, 0, -4, -5];
console.log("The maximum product subarray: " + maxProductSubArray(nums));
