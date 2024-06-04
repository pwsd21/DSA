const minEatingSpeed = (piles, h) => {
  let start = 1; // Minimum possible eating speed
  let end = max(piles); // Maximum possible eating speed based on the largest pile
  let ans = Number.MAX_SAFE_INTEGER; // Initialize answer with the largest safe integer

  // Binary search to find the minimum possible eating speed
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2); // Calculate the middle point
    let hoursTaken = CalulateHours(piles, mid); // Calculate the total hours taken with the current middle speed
    if (hoursTaken <= h) {
      // If the hours taken is less than or equal to the allowed hours, update the answer
      ans = Math.min(ans, mid);
      end = mid - 1; // Try to find a smaller eating speed
    } else {
      // If the hours taken is more than the allowed hours, increase the speed
      start = mid + 1;
    }
  }
  return ans; // Return the minimum eating speed that allows Koko to eat all the bananas in h hours
};

// Function to find the maximum value in the array
let maxValue = 0;
const max = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  return maxValue;
};

// Function to calculate the total hours taken to eat all the piles with a given eating speed
const CalulateHours = (piles, mid) => {
  let sum = 0;
  for (let i = 0; i < piles.length; i++) {
    sum = sum + Math.ceil(piles[i] / mid); // Calculate hours for each pile and add to the total sum
  }
  return sum; // Return the total hours taken
};

console.log(minEatingSpeed([20, 11, 23, 4, 30], 6)); // Output the minimum eating speed
