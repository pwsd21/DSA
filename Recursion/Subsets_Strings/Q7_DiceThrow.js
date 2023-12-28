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
