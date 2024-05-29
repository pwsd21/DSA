const generate = (numRows) => {
  // Initialize an empty array to hold the rows of Pascal's Triangle
  let pascalsTriangle = [];

  // Loop through each row index from 0 to numRows-1
  for (let r = 0; r < numRows; r++) {
    // Initialize an empty row
    let row = [];

    // Set the first and last element of the current row to 1
    row[0] = 1;
    row[r] = 1;

    // Populate the middle elements of the row
    for (let c = 1; c < r; c++) {
      // Retrieve the values from the previous row that are directly above the current element
      let leftValue = pascalsTriangle[r - 1][c - 1];
      let rightValue = pascalsTriangle[r - 1][c];

      // Set the current element to the sum of the values above it
      row[c] = leftValue + rightValue;
    }

    // Add the completed row to Pascal's Triangle
    pascalsTriangle.push(row);
  }

  // Return the completed Pascal's Triangle
  return pascalsTriangle;
};

// Generate and print Pascal's Triangle with 5 rows
console.log(generate(5));
