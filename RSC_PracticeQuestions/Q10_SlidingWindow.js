// Sliding window maximum
// Input : [1,3,-1,-3,5,3,6,7]
// Output : [3, 3, 5, 5, 6, 7]

const maxSlidingWindow = (arr, k) => {
  const result = [];
  const n = arr.length;

  for (let i = 0; i <= n - k; i++) {
    let max = arr[i];
    for (let j = 1; j < k; j++) {
      if (arr[i + j] > max) {
        max = arr[i + j];
      }
    }
    result.push(max);
  }
  return result;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));

// Optimized Way

const maxSlidingWindowValue = (arr, k) => {
  const result = [];
  const deque = [];

  for (let i = 0; i < arr.length; i++) {
    // Remove elements outside the current window from the front of the deque
    while (deque.length > 0 && deque[0] < i - k + 1) {
      deque.shift();
    }

    // Remove elements smaller than the current element from the back of the deque
    while (deque.length > 0 && arr[i] > arr[deque[deque.length - 1]]) {
      deque.pop();
    }

    // Add the current element's index to the deque
    deque.push(i);

    // Add maximum element for the current window to the result
    if (i >= k - 1) {
      result.push(arr[deque[0]]);
    }
  }

  return result;
};

console.log(maxSlidingWindowValue([1, 3, -1, -3, 5, 3, 6, 7], 3));
