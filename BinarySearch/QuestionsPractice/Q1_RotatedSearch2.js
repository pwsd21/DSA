// https://leetcode.com/problems/search-in-rotated-sorted-array-ii/

const search = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (target === arr[mid]) {
      return mid;
    }

    // for duplicates check
    if (arr[start] == arr[mid] && arr[mid] == arr[end]) {
      start++;
      end--;
      continue;
    }

    if (arr[mid] <= arr[end]) {
      if (target > arr[mid] && target <= arr[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else {
      if (target >= arr[start] && target < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 4));
