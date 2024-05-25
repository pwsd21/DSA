var checkArithmeticSubarrays = function (nums, l, r) {
  let res = [];

  // Loop through each subarray
  for (let i = 0; i < l.length; i++) {
    let start = l[i],
      end = r[i];

    // Extract subarray and sort it
    let subArr = nums.slice(start, end + 1);
    subArr.sort((a, b) => a - b);

    // Calculate the common difference
    let commonDiff = subArr[1] - subArr[0];
    let isArithmetic = true;

    // Check if the subarray is an arithmetic sequence
    for (let j = 2; j < subArr.length; j++) {
      if (subArr[j] - subArr[j - 1] !== commonDiff) {
        isArithmetic = false;
        break;
      }
    }

    // Push the result into the array
    res.push(isArithmetic);
  }

  return res;
};
