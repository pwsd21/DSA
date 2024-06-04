const splitArray = (arr, k) => {
  let start = 0; // Initialize the starting point
  let end = 0; // Initialize the ending point

  // Determine the initial values for start and end
  for (let i = 0; i < arr.length; i++) {
    start = Math.max(start, arr[i]); // start will be the maximum value in the array
    end += arr[i]; // end will be the sum of all elements in the array
  }

  // Binary search to find the minimum largest subarray sum
  while (start < end) {
    // Try the middle value as a potential answer
    let mid = start + Math.floor((end - start) / 2);

    // Calculate how many subarrays can be formed with this max sum
    let sum = 0;
    let pieces = 1; // Start with one piece
    for (let i = 0; i < arr.length; i++) {
      if (sum + arr[i] > mid) {
        // If adding arr[i] exceeds mid, start a new subarray
        sum = arr[i];
        pieces++;
      } else {
        // Otherwise, add arr[i] to the current subarray
        sum += arr[i];
      }
    }

    // Adjust the binary search range based on the number of pieces
    if (pieces > k) {
      // More pieces than allowed, increase the minimum limit
      start = mid + 1;
    } else {
      // Fewer or equal pieces, decrease the maximum limit
      end = mid;
    }
  }

  // Return the minimum largest subarray sum
  return start; // At this point, start === end
};

console.log(splitArray([7, 2, 5, 10, 8], 2)); // Output: 18

// --------------------- Alternate solution --------------------------

// const canBeSplit = (nums, maximumSum, k) => {
//   let currSum = 0,
//     parts = 1;
//   for (const num of nums) {
//     currSum += num;
//     if (currSum > maximumSum) {
//       currSum = num;
//       parts++;
//     }
//     if (parts > k) {
//       return false;
//     }
//   }
//   return true;
// };

// const splitArray = (nums, k) => {
//   let start = Math.max(...nums),
//     end = nums.reduce((a, b) => a + b);
//   while (start <= end) {
//     const mid = Math.floor(start + (end - start) / 2);
//     if (canBeSplit(nums, mid, k)) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }
//   return start;
// };
// console.log(splitArray([7, 2, 5, 10, 8], 2));
