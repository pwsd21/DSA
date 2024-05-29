function countPlatforms(arr, dep) {
  // Sort the arrival and departure times
  arr.sort((a, b) => a - b);
  dep.sort((a, b) => a - b);

  // Initialize variables
  let ans = 1;
  let count = 1;
  let i = 1;
  let j = 0;

  // Iterate over the sorted arrays
  while (i < arr.length && j < dep.length) {
    // If the next arrival time is less than or equal to the current departure time,
    // it indicates one more platform is needed
    if (arr[i] <= dep[j]) {
      count++;
      i++;
    } else {
      // If the next arrival time is greater than the current departure time,
      // it indicates one platform can be reduced
      count--;
      j++;
    }
    // Update the answer with the maximum count of platforms needed at any point
    ans = Math.max(ans, count);
  }

  return ans;
}

// Test the function
let arr = [900, 945, 955, 1100, 1500, 1800];
let dep = [920, 1200, 1130, 1150, 1900, 2000];
console.log("Minimum number of Platforms required: ", countPlatforms(arr, dep));
