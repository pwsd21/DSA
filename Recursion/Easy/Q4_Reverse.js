const Reverse = (n) => {
  if (n < 10) {
    return n;
  }
  return `${n % 10}` + Reverse(Math.floor(n / 10));
};

console.log(Reverse(1409));

// Leetcode reverse Integer

const ReverseInteger = (n) => {
  if (n % 10 === n) {
    return n;
  }
  return `${n % 10}` + ReverseInteger(Math.floor(n / 10));
};

console.log(ReverseInteger(1234));
