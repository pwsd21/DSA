const solveNQueens = (n) => {
  // Initialize an array to store the solutions
  const ans = [];

  // Helper function to check if it's safe to place a queen at position (row, col) on the board
  const isSafe = (row, col, board) => {
    // Check if there is any queen in the same column
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") {
        return false;
      }

      // Check if there is any queen in the diagonals
      const leftDiagonal = col - (row - i);
      const rightDiagonal = col + (row - i);
      if (board[i][leftDiagonal] === "Q" || board[i][rightDiagonal] === "Q") {
        return false;
      }
    }

    return true;
  };

  // Recursive function to solve the N-Queens problem
  const solve = (row, board) => {
    // If all rows are filled, add the solution to the result
    if (row === n) {
      ans.push([...board.map((row) => row.join(""))]);
      return;
    }

    // Try placing a queen in each column of the current row
    for (let col = 0; col < n; col++) {
      if (isSafe(row, col, board)) {
        // Place the queen at (row, col)
        board[row][col] = "Q";
        // Recur for the next row
        solve(row + 1, board);
        // Backtrack: Remove the queen from (row, col) before trying the next column
        board[row][col] = ".";
      }
    }
  };

  // Create an initial board with all cells empty
  const initialBoard = Array.from({ length: n }, () => Array(n).fill("."));
  // Start solving the problem from the first row
  solve(0, initialBoard);

  // Return the list of solutions
  return ans;
};
