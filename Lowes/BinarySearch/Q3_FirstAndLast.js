// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

const SearchRange = (nums, target) => {
  let ans = [-1, -1];
  ans[0] = search(nums, target, true); // first
  if (ans[0] != -1) {
    ans[1] = search(nums, target, false); // last
  }
  return ans;
};
const search = (nums, target, findStartIndex) => {
  let ans = -1;
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (target < nums[mid]) {
      end = mid - 1;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else {
      ans = mid;
      if (findStartIndex) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return ans;
};

console.log(SearchRange([2, 4, 6, 7, 7, 7, 8, 8, 9, 34], 7));
