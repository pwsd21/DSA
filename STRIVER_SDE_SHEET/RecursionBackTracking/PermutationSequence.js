var getPermutation = function (n, k) {
  // Initialize an object to store factorials
  const factorials = { 0: 1 };
  // Initialize an array to store numbers from 1 to n
  let arr = [];
  // Fill the array and compute factorials up to n
  for (let i = 1; i <= n; i++) {
    arr.push(i);
    factorials[i] = factorials[i - 1] * i;
  }

  // Initialize an array to store the k-th permutation
  const KthComb = [];
  // Decrement k to start from 0-based indexing
  k--;

  // Generate the k-th permutation
  while (arr.length > 0) {
    // Compute the length of available numbers
    const availableLen = arr.length - 1;
    // Compute the index to swap
    let swapValue = Math.floor(k / factorials[availableLen]);
    // Add the number at the swap index to the k-th permutation
    KthComb.push(arr[swapValue]);
    // Remove the added number from the array
    arr.splice(swapValue, 1);
    // Update k to consider the remaining permutations
    k = k % factorials[availableLen];
  }

  // Convert the array of numbers to a string and return the k-th permutation
  return KthComb.join("");
};
