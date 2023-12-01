const RecursiveBinarySearch = (arr, target, s, e) => {
  if (s > e) {
    return -1;
  }

  let mid = s + Math.floor((e - s) / 2);
  if (target == arr[mid]) {
    return mid;
  }
  if (target > arr[mid]) {
    return RecursiveBinarySearch(arr, target, mid + 1, e);
  }
  return RecursiveBinarySearch(arr, target, s, mid - 1);
};

const arr = [1, 4, 5, 66, 78, 99];

console.log(RecursiveBinarySearch(arr, 99, 0, arr.length - 1));
