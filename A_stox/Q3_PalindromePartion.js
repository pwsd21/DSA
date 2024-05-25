var partition = function (s) {
  let result = [];

  const isPalindrome = (str) => {
    let left = 0,
      right = str.length - 1;
    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }
    return true;
  };

  const dfsBacktracking = (s, path) => {
    if (s.length === 0) {
      result.push([...path]);
      return;
    }
    for (let i = 1; i <= s.length; i++) {
      let partition = s.substring(0, i);
      if (isPalindrome(partition)) {
        path.push(partition);
        dfsBacktracking(s.substring(i), path);
        path.pop(); // backtrack
      }
    }
  };

  dfsBacktracking(s, []);
  return result;
};
