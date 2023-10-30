const findPivot = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (mid < end && arr[mid] > arr[mid + 1]) {
      return mid;
    }
    if (mid > start && arr[mid] < arr[mid - 1]) {
      return mid - 1;
    }
    if (arr[start] >= arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
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
  if (pivot == -1) {
    return binarySearch(nums, target, 0, arr.length - 1);
  }
  if (arr[pivot] == target) {
    return pivot;
  }
  if (target > arr[0]) {
    return binarySearch(arr, target, 0, pivot - 1);
  }
  return binarySearch(arr, target, pivot, arr.length - 1);
};

console.log(RotatedSortedArray([3, 4, 5, 6, 7, 0, 1, 2], 1));
