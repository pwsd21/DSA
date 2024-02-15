const findRange = (arr, target) => {
  let start = 0;
  let end = 1;

  while (target > arr[end]) {
    let temp = end + 1;
    end = end + (end - start + 1) * 2; // only main logic - rest normal binary search
    start = temp;
  }
  return InfiniteSearch(arr, target, start, end);
};

const InfiniteSearch = (arr, target, start, end) => {
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
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
const target = 34;

console.log(findRange(array, target));
