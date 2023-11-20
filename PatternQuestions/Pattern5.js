/*
 *
 **
 ***
 ****
 *****
 ****
 ***
 **
 *
 */

const Pattern5 = (n) => {
  for (let i = 1; i < 2 * n; i++) {
    let row = "";
    let totalCol = i > n ? 2 * n - i : i;
    for (let j = 1; j <= totalCol; j++) {
      row += "*";
    }
    console.log(row);
  }
};

Pattern5(5);
