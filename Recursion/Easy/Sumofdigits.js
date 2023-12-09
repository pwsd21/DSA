const SumOfDigits = (n) => {
  if (n === 0) {
    return 0;
  }
  return (n % 10) + SumOfDigits(Math.floor(n / 10));
};

console.log(SumOfDigits(1234));

// Product

const Productofdigits = (n) => {
  if (n % 10 === n) {
    return n;
  }
  return (n % 10) * Productofdigits(Math.floor(n / 10));
};

console.log(Productofdigits(981));
