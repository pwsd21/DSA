const countOccurrences = (arr) => {
  const countMap = {};

  arr.forEach((element) => {
    countMap[element] = (countMap[element] || 0) + 1;
  });

  return countMap;
};

// Example usage:
const myArray = [1, 2, 3, 1, 2, 3, 4, 5, 1, 2];
const occurrences = countOccurrences(myArray);
console.log(occurrences);
