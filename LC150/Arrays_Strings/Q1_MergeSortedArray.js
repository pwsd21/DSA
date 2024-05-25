const merge = (nums1, m, nums2, n) => {
  let insertPosition = m + n - 1;
  m--;
  n--;
  while (n >= 0) {
    if (m >= 0 && nums1[m] > nums2[n]) {
      nums1[insertPosition] = nums1[m];
      m--;
    } else {
      nums1[insertPosition] = nums2[n];
      n--;
    }
    insertPosition--;
  }
  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
