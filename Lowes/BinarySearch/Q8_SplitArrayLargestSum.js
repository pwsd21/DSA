const splitArray = (arr, k) => {
  let start = 0;
  let end = 0;

  for (let i = 0; i < arr.length; i++) {
    start = Math.max(start, arr[i]); // max value in array
    end += arr[i]; // sum of array
  }
  // binary search
  while (start < end) {
    // try middle as potential answer
    let mid = start + Math.floor((end - start) / 2);

    // calculate how many pieces you can divide it in with this max sum
    let sum = 0;
    let pieces = 1;
    for (let i = 0; i < arr.length; i++) {
      if (sum + arr[i] > mid) {
        sum = arr[i];
        pieces++;
      } else {
        sum += arr[i];
      }
    }

    if (pieces > k) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return start; // here start === end
};

console.log(splitArray([7, 2, 5, 10, 8], 2));

// --------------------- Alternate solution --------------------------

// const canBeSplit = (nums, maximumSum, k) => {
//   let currSum = 0,
//     parts = 1;
//   for (const num of nums) {
//     currSum += num;
//     if (currSum > maximumSum) {
//       currSum = num;
//       parts++;
//     }
//     if (parts > k) {
//       return false;
//     }
//   }
//   return true;
// };

// const splitArray = (nums, k) => {
//   let start = Math.max(...nums),
//     end = nums.reduce((a, b) => a + b);
//   while (start <= end) {
//     const mid = Math.floor(start + (end - start) / 2);
//     if (canBeSplit(nums, mid, k)) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }
//   return start;
// };
// console.log(splitArray([7, 2, 5, 10, 8], 2));
