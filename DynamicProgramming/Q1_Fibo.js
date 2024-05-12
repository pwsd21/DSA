// Memoization - TC - O(n) , SC - O(n)+O(n)
const fibo = (n) => {
  const dp = new Array(n + 1).fill(-1); // step 1
  function memoizedFibo(n) {
    if (n < 2) {
      return n;
    }

    if (dp[n] != -1) return dp[n]; // step 2

    return (dp[n] = memoizedFibo(n - 1) + memoizedFibo(n - 2)); // step 3
  }
  return memoizedFibo(n);
};

console.log(fibo(9));

// Tabulation Method - TC, SC - O(n)

const fiboTab = (n) => {
  let prev2 = 0;
  let prev = 1;
  let cur;
  for (let i = 2; i <= n; i++) {
    cur = prev2 + prev;
    prev2 = prev;
    prev = cur;
  }
  return prev;
};
console.log(fiboTab(9));
