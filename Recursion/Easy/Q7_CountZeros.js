const Count = (n) => {
  let c = 0;
  return helper(n, c);
};

// special example to return same value to the above function calls
const helper = (n, c) => {
  if (n === 0) {
    return c;
  }
  let rem = n % 10;
  if (rem === 0) {
    return helper(Math.floor(n / 10), c + 1);
  }
  return helper(Math.floor(n / 10), c);
};

console.log(Count(20203040));
