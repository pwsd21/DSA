const dice = (p, target) => {
  if (target === 0) {
    console.log(p);
    return;
  }

  for (let i = 1; i <= 6 && i <= target; i++) {
    dice(p + i, target - i);
  }
};

dice("", 4);

// For Array
const diceArray = (p, target) => {
  let result = [];
  if (target === 0) {
    result.push(p);
    return result;
  }

  for (let i = 1; i <= 6 && i <= target; i++) {
    result.push(...diceArray(p + i, target - i));
  }
  return result;
};

console.log(diceArray("", 4));

// Count

const diceCount = (p, target) => {
  if (target === 0) {
    return 1;
  }

  let count = 0;
  for (let i = 1; i <= 6 && i <= target; i++) {
    count = count + diceCount(p + i, target - i);
  }
  return count;
};

console.log(diceCount("", 4));
