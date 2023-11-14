/**
 *
 * *
 * **
 * ***
 * ****
 */

const Pattern1 = (n) => {
  for (let i = 1; i <= n; i++) {
    let row = "";
    //for every row, run the column
    for (j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
};

Pattern1(5);
