var findMaxConsecutiveOnes = function (nums) {
  // Initialize variables to track the maximum consecutive ones and the current count of consecutive ones
  let max = 0; // maximum consecutive ones found so far
  let c = 0; // current count of consecutive ones

  // Iterate through the array
  for (let x of nums) {
    // If the current element is 1
    if (x == 1) {
      // Increment the count of consecutive ones
      c++;
      // Update the maximum if the current count exceeds the previous maximum
      if (c > max) max = c;
    } else {
      // Reset the count of consecutive ones since the sequence is interrupted by a zero
      c = 0;
    }
  }

  // Return the maximum consecutive ones found
  return max;
};
