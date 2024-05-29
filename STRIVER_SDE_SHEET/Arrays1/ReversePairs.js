// Function to merge two sorted halves of the array
function merge(arr, low, mid, high) {
  let temp = []; // temporary array to store merged elements
  let left = low; // starting index of left half of arr
  let right = mid + 1; // starting index of right half of arr

  // storing elements in the temporary array in a sorted manner
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]); // push element from left half
      left++;
    } else {
      temp.push(arr[right]); // push element from right half
      right++;
    }
  }

  // if elements on the left half are still left
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  // if elements on the right half are still left
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  // transferring all elements from temporary to arr
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

// Function to count reverse pairs in the array
function countPairs(arr, low, mid, high) {
  let right = mid + 1;
  let cnt = 0; // counter for reverse pairs
  for (let i = low; i <= mid; i++) {
    // count the number of elements on the right half such that arr[i] > 2 * arr[right]
    while (right <= high && arr[i] > 2 * arr[right]) {
      right++;
    }
    cnt += right - (mid + 1); // update counter
  }
  return cnt;
}

// Function to perform merge sort and count reverse pairs
function mergeSort(arr, low, high) {
  let cnt = 0; // initialize counter
  if (low >= high) return cnt; // base case
  let mid = Math.floor((low + high) / 2); // find middle index
  // recursively sort and count reverse pairs in left and right halves
  cnt += mergeSort(arr, low, mid); // left half
  cnt += mergeSort(arr, mid + 1, high); // right half
  cnt += countPairs(arr, low, mid, high); // count reverse pairs between halves
  merge(arr, low, mid, high); // merge sorted halves
  return cnt;
}

// Function to calculate the number of reverse pairs
function team(skill, n) {
  return mergeSort(skill, 0, n - 1);
}

// Example usage
let a = [4, 1, 2, 3, 1]; // input array
let n = 5; // length of array
let cnt = team(a, n); // calculate the number of reverse pairs
console.log("The number of reverse pairs is: " + cnt); // output result
