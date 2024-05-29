// Function to find the maximum length subarray with sum equal to 0
function maxLen(A, n) {
  let mpp = new Map(); // Map to store prefix sum and its index
  let maxi = 0; // Maximum length of subarray
  let sum = 0; // Current prefix sum

  for (let i = 0; i < n; i++) {
    sum += A[i]; // Update prefix sum

    // If current prefix sum is 0, update maximum length
    if (sum === 0) {
      maxi = i + 1;
    } else {
      // If current prefix sum exists in map, update maximum length
      if (mpp.has(sum)) {
        maxi = Math.max(maxi, i - mpp.get(sum));
      } else {
        // Otherwise, store current prefix sum and its index in map
        mpp.set(sum, i);
      }
    }
  }

  return maxi; // Return maximum length of subarray
}

let A = [9, -3, 3, -1, 6, -5]; // Input array
let n = A.length; // Length of array
console.log(maxLen(A, n)); // Output maximum length of subarray with sum equal to 0
