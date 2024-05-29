function mergeOverlappingIntervals(arr) {
  const n = arr.length;

  // Sort the given intervals by their start times
  arr.sort((a, b) => a[0] - b[0]);

  // Initialize the result array with the first interval
  const ans = [arr[0]];

  // Iterate through the sorted intervals
  for (let i = 1; i < n; i++) {
    const last = ans[ans.length - 1]; // Get the last interval in the result array
    const curr = arr[i]; // Get the current interval

    // Check if the current interval overlaps with the last interval in the result array
    if (curr[0] <= last[1]) {
      // If they overlap, merge the intervals by updating the end time of the last interval
      last[1] = Math.max(last[1], curr[1]);
    } else {
      // If they do not overlap, add the current interval to the result array
      ans.push(curr);
    }
  }

  // Return the merged intervals
  return ans;
}

// Test the function with an example array of intervals
const arr = [
  [1, 3],
  [8, 10],
  [2, 6],
  [15, 18],
];
const ans = mergeOverlappingIntervals(arr);

// Print the merged intervals
console.log("The merged intervals are:");
for (let it of ans) {
  console.log(`[${it[0]}, ${it[1]}]`);
}
