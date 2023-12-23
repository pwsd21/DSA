const binarySearch = (arr, target, start, end) => {
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

const findPeak = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] > arr[mid + 1]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start; // we can return end also since start will be equal to end
};

const findInMountainArray = (target, mountainArr) => {
  let peak = findPeak(mountainArr);

  let leftTarget = binarySearch(mountainArr, target, 0, peak);
  if (leftTarget != -1) {
    return leftTarget;
  }
  let rightTarget = binarySearch(
    mountainArr,
    target,
    peak + 1,
    mountainArr.length - 1
  );

  if (rightTarget != -1) {
    return rightTarget;
  }

  return -1;
};

console.log(findInMountainArray(5, [1, 2, 3, 4, 7, 6, 5, 3, 1]));
