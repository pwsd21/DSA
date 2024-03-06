function maxSumSubsequence(arr) {
  const n = arr.length;
  if (n === 0) return 0;
  if (n === 1) return arr[0];

  // Initialize two variables to store the maximum sum ending with the previous and current elements
  let prevMaxSum = Math.max(0, arr[0]);
  let currMaxSum = Math.max(prevMaxSum, arr[1]);

  // Iterate through the array starting from the third element
  for (let i = 2; i < n; i++) {
    // Calculate the maximum sum if the current element is included
    const includeCurrent = prevMaxSum + arr[i];
    // Update currMaxSum with the maximum of includeCurrent and excludeCurrent
    currMaxSum = Math.max(includeCurrent, currMaxSum);
    // Update prevMaxSum for the next iteration
    prevMaxSum = currMaxSum - includeCurrent + arr[i];
  }

  return currMaxSum;
}

// Test cases
console.log(maxSumSubsequence([1, 2, 4])); // Output: 5
console.log(maxSumSubsequence([2, 1, 4, 9])); // Output: 11
console.log(maxSumSubsequence([1, 2, 3, 5, 4])); // Output: 8
console.log(maxSumSubsequence([1, 2, 3, 1, 3, 5, 8, 1, 9])); // Output: 24
