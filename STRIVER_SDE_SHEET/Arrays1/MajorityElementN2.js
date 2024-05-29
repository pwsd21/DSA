function majorityElement(arr) {
  // Size of the given array
  let n = arr.length;
  let cnt = 0; // Count
  let el; // Element

  // Applying the Boyer-Moore Majority Vote algorithm
  for (let i = 0; i < n; i++) {
    // If count is 0, set the current element as the potential majority element
    if (cnt === 0) {
      cnt = 1;
      el = arr[i];
    }
    // If the current element equals the potential majority element, increment the count
    else if (el === arr[i]) {
      cnt++;
    }
    // If the current element is different from the potential majority element, decrement the count
    else {
      cnt--;
    }
  }

  // Checking if the stored element is the majority element
  let cnt1 = 0; // Counter to count occurrences of the potential majority element
  for (let i = 0; i < n; i++) {
    if (arr[i] === el) {
      cnt1++; // Increment the counter if the element matches the potential majority element
    }
  }

  // If the counter exceeds half the length of the array, the potential majority element is the majority element
  if (cnt1 > Math.floor(n / 2)) {
    return el; // Return the majority element
  }

  return -1; // Return -1 if no majority element is found
}
