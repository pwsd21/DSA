var solveSudoku = function (board) {
  // Loop through each cell in the board
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      // If the cell is empty
      if (board[row][col] === ".") {
        // Try placing each digit from 1 to 9
        for (let digit = 1; digit < 10; digit++) {
          const digitStr = digit.toString();
          // Check if placing the digit is valid
          if (isValid(board, row, col, digitStr)) {
            // If valid, place the digit and recursively solve the rest of the puzzle
            board[row][col] = digitStr;
            let solved = solveSudoku(board);
            // If a solution is found, return it
            if (solved !== false) return solved;
            // If no solution is found, reset the cell to empty and try the next digit
            board[row][col] = ".";
          }
        }
        // If no valid digit is found, return false
        return false;
      }
    }
  }
  // If all cells are filled, the board is solved, return the solved board
  return board;
};

// Function to check if placing a digit at a certain position is valid
function isValid(board, row, col, digit) {
  for (let p = 0; p < board.length; p++) {
    // Check if the digit already exists in the same row or column
    if (board[row][p] === digit) return false;
    if (board[p][col] === digit) return false;

    // Check if the digit already exists in the 3x3 grid
    let gridVal =
      board[3 * Math.floor(row / 3) + Math.floor(p / 3)][
        3 * Math.floor(col / 3) + (p % 3)
      ];
    if (gridVal === digit) return false;
  }
  // If the digit can be placed at the position, return true
  return true;
}
