function majorityElement(v) {
  let n = v.length; // Size of the array

  let cnt1 = 0,
    cnt2 = 0; // Counts
  let el1 = -Infinity; // Element 1
  let el2 = -Infinity; // Element 2

  // Applying the Extended Boyer Moore's Voting Algorithm:
  for (let i = 0; i < n; i++) {
    // If count 1 is 0 and the current element is not equal to element 2, update element 1
    if (cnt1 === 0 && el2 !== v[i]) {
      cnt1 = 1;
      el1 = v[i];
    }
    // If count 2 is 0 and the current element is not equal to element 1, update element 2
    else if (cnt2 === 0 && el1 !== v[i]) {
      cnt2 = 1;
      el2 = v[i];
    }
    // If the current element matches element 1, increment count 1
    else if (v[i] === el1) cnt1++;
    // If the current element matches element 2, increment count 2
    else if (v[i] === el2) cnt2++;
    // If the current element does not match either element, decrement both counts
    else {
      cnt1--, cnt2--;
    }
  }

  let ls = []; // List of answers

  // Manually check if the stored elements in el1 and el2 are the majority elements:
  (cnt1 = 0), (cnt2 = 0);
  for (let i = 0; i < n; i++) {
    if (v[i] === el1) cnt1++;
    if (v[i] === el2) cnt2++;
  }

  let mini = Math.floor(n / 3) + 1; // Minimum threshold for majority elements
  if (cnt1 >= mini) ls.push(el1); // If count of element 1 is greater than or equal to the threshold, push it to the list
  if (cnt2 >= mini) ls.push(el2); // If count of element 2 is greater than or equal to the threshold, push it to the list

  // Uncomment the following line if it is told to sort the answer array:
  // ls.sort(); // TC --> O(2*log2) ~ O(1);

  return ls; // Return the list of majority elements
}

let arr = [11, 33, 33, 11, 33, 11];
let ans = majorityElement(arr);
console.log("The majority elements are: " + ans.join(" ")); // Output the majority elements separated by spaces
