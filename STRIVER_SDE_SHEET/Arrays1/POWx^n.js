function myPow(x, n) {
  let ans = 1.0; // Initialize the answer variable to 1.0
  // Iterate 'n' times to compute the power
  for (let i = 0; i < n; i++) {
    ans = ans * x; // Multiply 'x' with the current value of 'ans'
  }
  return ans; // Return the computed power
}

// Test the function
console.log(myPow(2, 10)); // Output: 1024 (2^10)
