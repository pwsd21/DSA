class Solution {
  subsetSums(arr, n) {
    // Initialize an array to store subset sums
    let ans = [];

    // Define a helper function to generate subset sums recursively
    function subsetSumsHelper(ind, sum) {
      // Base case: if all elements are processed, add the current sum to the result array
      if (ind === n) {
        ans.push(sum);
        return;
      }

      // Recursive call: include the current element in the subset sum
      subsetSumsHelper(ind + 1, sum + arr[ind]);
      // Recursive call: exclude the current element from the subset sum
      subsetSumsHelper(ind + 1, sum);
    }

    // Start the recursive process with initial values
    subsetSumsHelper(0, 0);

    // Sort the subset sums in ascending order
    ans.sort((a, b) => a - b);

    return ans;
  }
}

// Test the function
let arr = [3, 1, 2];
let ans = new Solution().subsetSums(arr, arr.length);
console.log("The sum of each subset is");
for (let sum of ans) {
  process.stdout.write(sum + " ");
}
console.log();
