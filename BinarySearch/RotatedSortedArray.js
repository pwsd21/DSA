const findPivot = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] > arr[end]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
};

const binarySearch = (arr, target, start, end) => {
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (target > arr[mid]) {
      start = mid + 1;
    } else if (target < arr[mid]) {
      end = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};

const RotatedSortedArray = (arr, target) => {
  let pivot = findPivot(arr);
  if (pivot === 0 || target < arr[0]) {
    return binarySearch(arr, target, pivot, arr.length - 1);
  }
  return binarySearch(arr, target, 0, pivot - 1);
};

console.log(RotatedSortedArray([3, 1], 1)); // Should return 1
