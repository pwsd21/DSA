var findKthLargest = function (nums, k) {
  // find the largest element in the array
  let largest = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) largest = nums[i];
  }

  // construct a hash map of difference between nums[i] and largest
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = largest - nums[i];
    hash[diff] = (hash[diff] || 0) + 1;
  }

  // find the kth largest number by iterating over the hash map
  let count = 0;
  let diff = 0;
  while (count < k) {
    count += hash[diff] || 0;
    diff++;
  }

  // return the kth largest number
  return largest - diff + 1;
};
