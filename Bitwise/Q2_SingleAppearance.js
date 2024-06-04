const singleAppear = (arr) => {
  let unique = 0;
  for (let i = 0; i < arr.length; i++) {
    unique ^= arr[i];
  }
  return unique;
};

console.log(singleAppear([1, 2, 4, 3, 5, 6, 5, 2, 1, 3, 4]));
