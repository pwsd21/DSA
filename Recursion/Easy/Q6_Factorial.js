// my solution
let sum = 1;
const Fact = (n) => {
  if (n === 1) {
    return;
  }
  sum = sum * n;
  Fact(n - 1);
  return sum;
};

console.log(Fact(5));

// Alternate solution - Preferred

const Factorial = (n) => {
  if (n <= 1) {
    return 1;
  }

  return n * Factorial(n - 1);
};

console.log(Factorial(5));
