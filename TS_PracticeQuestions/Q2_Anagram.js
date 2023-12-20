// O(n) - Best Way
const isAnagram = (str1, str2) => {
  if (str1.length != str2.length) {
    return false;
  }
  let counter = {};
  for (let letter of str1) {
    counter[letter] = (counter[letter] || 0) + 1;
    console.log(counter[letter]);
  }
  console.log(counter);
  for (let items of str2) {
    if (!counter[items]) {
      return false;
    }
    counter[items] -= 1;
  }
  console.log(counter);
  return true;
};

console.log(isAnagram("hello", "lleoh"));

// O(nlogn)
const isAnagram2 = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
};

// console.log(isAnagram2("hello", "llloh")); // true
