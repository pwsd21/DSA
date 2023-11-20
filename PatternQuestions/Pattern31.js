const Pattern31 = (n) => {
  let originalN = n;
  n = 2 * n;
  for (let i = 0; i <= n; i++) {
    let row = " ";
    for (let j = 0; j <= n; j++) {
      let atEveryIndex =
        originalN - Math.min(Math.min(i, j), Math.min(n - i, n - j));
      row += `${atEveryIndex} `;
    }
    console.log(row);
  }
};

Pattern31(4);
