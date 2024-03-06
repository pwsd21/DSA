var strStr = function (haystack, needle) {
  const haystackLength = haystack.length;
  const needleLength = needle.length;

  if (needleLength === 0) {
    return 0;
  }

  if (haystackLength < needleLength) {
    return -1;
  }

  for (let i = 0; i <= haystackLength - needleLength; i++) {
    if (haystack.substring(i, i + needleLength) === needle) {
      return i;
    }
  }

  return -1;
};
