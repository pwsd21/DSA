const generate = (numRows) => {
  let pascalsTriangle = [];

  for (let r = 0; r < numRows; r++) {
    let row = [];

    // Setting first and last element of row to 1
    row[0] = 1;
    row[r] = 1;

    // logic to populate the middle elements of row
    for (let c = 1; c < r; c++) {
      let leftValue = pascalsTriangle[r - 1][c - 1];
      let rightValue = pascalsTriangle[r - 1][c];

      row[c] = leftValue + rightValue;
    }
    pascalsTriangle.push(row);
  }
  return pascalsTriangle;
};

console.log(generate(5));
