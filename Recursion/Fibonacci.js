// 0,1,1,2,3,5,8,13 ....

const Fibo = (n) => {
  // Base Condition
  if (n < 2) {
    return n;
  }

  return Fibo(n - 1) + Fibo(n - 2);
};

console.log(Fibo(6));
