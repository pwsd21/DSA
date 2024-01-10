const search = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    // if found
    if (target === nums[mid]) {
      return mid;
    }

    // existing values comparison
    if (nums[mid] <= nums[end]) {
      // target comparison
      if (target > nums[mid] && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else {
      if (target >= nums[start] && target < nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
};
console.log(search([4, 5, 6, 7, 0, 1, 2], 4)); // Should return 4
