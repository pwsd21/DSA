// 0,1,1,2,3,5,8,13 ....

const Fibo = (n) => {
  // Base Condition
  if (n < 2) {
    return n;
  }

  return Fibo(n - 1) + Fibo(n - 2);
};

// console.log(Fibo(9));

// Alternate using formula

const Fibonacci = (n) => {
  return Math.round(Math.pow((1 + Math.sqrt(5)) / 2, n) / Math.sqrt(5));
};

// to print series
for (let i = 0; i <= 10; i++) {
  console.log(Fibonacci(i));
}

// to print nth fibonacci number
console.log(Fibonacci(10));
