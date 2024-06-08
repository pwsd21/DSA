const isPrime = (n) => {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

// code to find n primes

const primes = (n) => {
  let prime = [];
  let num = 2;
  while (prime.length < n) {
    if (isPrime(num)) {
      prime.push(num);
    }
    num++;
  }
  return prime;
};

console.log(primes(10));
