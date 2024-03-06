var solveSudoku = function (board) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      if (board[row][col] === ".") {
        for (let digit = 1; digit < 10; digit++) {
          const digitStr = digit.toString();
          if (isValid(board, row, col, digitStr)) {
            board[row][col] = digitStr;
            let solved = solveSudoku(board);
            if (solved !== false) return solved; // If we never hit false outside this loop, it means the board is a solution
            board[row][col] = "."; // If it was false, then reset the value
          }
        }
        return false; // If we exit the for loop, it means there was no solution, so return false
      }
    }
  }
  return board;
};

function isValid(board, row, col, digit) {
  for (let p = 0; p < board.length; p++) {
    if (board[row][p] === digit) return false;
    if (board[p][col] === digit) return false;

    let gridVal =
      board[3 * Math.floor(row / 3) + Math.floor(p / 3)][
        3 * Math.floor(col / 3) + (p % 3)
      ];
    // 3 * Math.floor(row / 3) and 3 * Math.floor(col / 3) are the coordinates for
    // the top-left square of the 3x3 grid that the value is in
    if (gridVal === digit) return false;
  }

  return true;
}
