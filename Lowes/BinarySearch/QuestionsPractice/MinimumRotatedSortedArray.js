// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/

// 1. Identify the sorted Half
// 2. Sorted half may or may not have minimum, so pick the min from sorted half and eliminate
// 3. compare with ans and update the minimum value in ans
// 4. return the answer

const minimum = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  let ans = Number.MAX_SAFE_INTEGER;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[start] <= arr[mid]) {
      ans = Math.min(ans, arr[start]);
      start = mid + 1;
    } else {
      end = mid - 1;
      ans = Math.min(ans, arr[mid]);
    }
  }
  return ans;
};

console.log(minimum([6, -8, 1, 2, 3, 4, 5]));
