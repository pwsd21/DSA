// Function to find the maximum profit from buying and selling stock
const buySell = (arr) => {
  // Initialize the minimum price to the first element of the array
  let min = arr[0];
  // Initialize the maximum difference (profit) to 0
  let maxDiff = 0;

  // Iterate through the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    // If the current price is greater than the minimum price found so far
    if (arr[i] > min) {
      // Calculate the potential profit and update maxDiff if it's higher than the previous maxDiff
      maxDiff = Math.max(maxDiff, arr[i] - min);
    } else {
      // If the current price is less than or equal to the minimum price found so far, update the minimum price
      min = arr[i];
    }
  }

  // Return the maximum profit found
  return maxDiff;
};

// Test the function with an example array
console.log(buySell([7, 1, 5, 3, 6, 4])); // Output should be 5 (buy at 1 and sell at 6)
