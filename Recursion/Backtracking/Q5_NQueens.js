const solveNQueens = (n) => {
  const ans = [];

  const isSafe = (row, col, board) => {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") {
        return false;
      }

      const leftDiagonal = col - (row - i);
      const rightDiagonal = col + (row - i);

      if (board[i][leftDiagonal] === "Q" || board[i][rightDiagonal] === "Q") {
        return false;
      }
    }

    return true;
  };

  const solve = (row, board) => {
    if (row === n) {
      ans.push([...board.map((row) => row.join(""))]);
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(row, col, board)) {
        board[row][col] = "Q";
        solve(row + 1, board);
        board[row][col] = ".";
      }
    }
  };

  const initialBoard = Array.from({ length: n }, () => Array(n).fill("."));
  solve(0, initialBoard);

  return ans;
};

// Example usage:
const n = 4;
const result = solveNQueens(n);
console.log(result);
