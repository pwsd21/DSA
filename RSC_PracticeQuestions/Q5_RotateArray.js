// Optimized Way

const rotateArrayOptimized = (arr, k) => {
  let size = arr.length;

  if (size > k) {
    k = k % size;
  }

  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);

  return arr;
};

const reverse = (arr, start, end) => {
  while (start < end) {
    const temp = arr[start];
    arr[start++] = arr[end];
    arr[end--] = temp;
  }
};

console.log(rotateArrayOptimized([1, 2, 3, 4, 5, 6, 7], 3));

// Rotate Array k times

const rotateArray = (arr, k) => {
  let size = arr.length;

  if (size > k) {
    k = k % size;
  }

  const rotated = arr.splice(size - k, size);
  arr.unshift(...rotated);
  return arr;
};

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));

// Slice - Doesn't change the original array , only returns the piece of array

// Splice - returns Modified original array
