const numberOfSteps = (n) => {
  return helper(n, (steps = 0));
};

const helper = (n, steps) => {
  if (n === 0) {
    return steps;
  }
  if (n % 2 == 0) {
    return helper(n / 2, steps + 1);
  }
  return helper(n - 1, steps + 1);
};

console.log(numberOfSteps(8));
