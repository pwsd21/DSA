const aggressivePigs = (stalls, k) => {
  // Sort the stalls in ascending order
  const arr = stalls.sort((a, b) => a - b);

  // Initialize the search range for the maximum distance
  let start = 1;
  let end = arr[arr.length - 1] - arr[0]; // maximum distance is the difference between the maximum and minimum stall positions

  // Perform binary search to find the maximum distance that can be assigned to each pig
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2); // calculate the midpoint

    // Check if we can place all pigs with the current maximum distance
    if (canWePlacePigs(stalls, mid, k) === true) {
      start = mid + 1; // If yes, move the start pointer to the right
    } else {
      end = mid - 1; // If not, move the end pointer to the left
    }
  }

  return end; // Return the maximum distance that can be assigned to each pig
};

// Function to check if we can place all pigs with a given maximum distance
const canWePlacePigs = (stalls, dist, pigs) => {
  let count = 1; // Initialize the count of pigs placed
  let last = stalls[0]; // Initialize the position of the last placed pig

  // Iterate through the stalls to check if pigs can be placed with the given distance
  for (let i = 0; i < stalls.length; i++) {
    if (stalls[i] - last >= dist) {
      // If the distance between the current stall and the last placed pig is greater than or equal to the given distance
      count++; // Increment the count of pigs placed
      last = stalls[i]; // Update the position of the last placed pig
    }
    if (count >= pigs) return true; // If all pigs are placed, return true
  }
  return false; // If not all pigs can be placed, return false
};

console.log(aggressivePigs([0, 3, 4, 7, 10, 9], 4)); // Output: 3
