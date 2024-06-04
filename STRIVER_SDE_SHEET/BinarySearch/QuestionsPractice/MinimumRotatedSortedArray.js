// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/

// 1. Identify the sorted Half
// 2. Sorted half may or may not have minimum, so pick the min from sorted half and eliminate
// 3. compare with ans and update the minimum value in ans
// 4. return the answer

const minimum = (arr) => {
  let start = 0; // Initialize start to the first index of the array
  let end = arr.length - 1; // Initialize end to the last index of the array
  let ans = Number.MAX_SAFE_INTEGER; // Initialize answer with the largest safe integer to ensure any value in the array will be smaller

  // Binary search to find the minimum element in the rotated sorted array
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2); // Calculate the middle index to avoid potential overflow

    if (arr[start] <= arr[mid]) {
      // If the left part of the array (from start to mid) is sorted
      ans = Math.min(ans, arr[start]); // Update the minimum found so far with the value at the start
      start = mid + 1; // Move the start to mid + 1 to search the right part of the array
    } else {
      // If the right part of the array (from mid to end) is sorted
      ans = Math.min(ans, arr[mid]); // Update the minimum found so far with the value at mid
      end = mid - 1; // Move the end to mid - 1 to search the left part of the array
    }
  }

  return ans; // Return the minimum element found
};

console.log(minimum([6, -8, 1, 2, 3, 4, 5])); // Output the minimum element in the rotated sorted array
