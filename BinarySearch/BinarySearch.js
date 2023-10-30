// Sorted - Ascending Array
const BinarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  let mid;
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (target < arr[mid]) {
      end = mid - 1;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};

const array = [-2, 5, 6, 7, 8, 9, 34, 56, 78, 99];
const target = 78;

console.log(BinarySearch(array, target));

// Sorted - Ascending Array
const BinarySearch2 = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  let mid;
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (target > arr[mid]) {
      end = mid - 1;
    } else if (target < arr[mid]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};

console.log(BinarySearch2([8, 7, 6, 5, 4, 3, 2, 1, -7], 3));

// Order Agnostic Binary Search

const SearchBinary = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  let isAsc = arr[start] < arr[end]; // Check if the array is in ascending order

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (target === arr[mid]) {
      return mid;
    }

    if (isAsc) {
      if (target < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (target > arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  return -1;
};
