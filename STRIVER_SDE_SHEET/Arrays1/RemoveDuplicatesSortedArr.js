const removeDuplicates = (nums) => {
  // Initialize a pointer k to track the position where the next unique element will be placed
  let k = 1;
  // Iterate through the array starting from the second element
  for (let i = 0; i < nums.length - 1; i++) {
    // If the current element is different from the next element
    if (nums[i] !== nums[i + 1]) {
      // Move the unique element to position k and increment k
      nums[k] = nums[i + 1];
      k++;
    }
  }
  // k now represents the length of the array containing unique elements
  return k;
};
