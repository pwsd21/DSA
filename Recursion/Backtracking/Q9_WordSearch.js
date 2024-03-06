var exist = function (board, word) {
  let result = false;

  // Backtracking function (Depth-First Search)
  var dfs = function (r, c, i) {
    if (!result) {
      if (r < 0 || c < 0 || r >= board.length || c >= board[0].length) return; // Out of boundary
      if (board[r][c] !== word[i]) return; // Wrong character
      if (i === word.length - 1) {
        // Reached the end, found a correct path
        result = true;
        return;
      }
      board[r][c] = null; // Mark the path so we don't go back and forth
      // Try all directions
      dfs(r + 1, c, i + 1);
      dfs(r - 1, c, i + 1);
      dfs(r, c + 1, i + 1);
      dfs(r, c - 1, i + 1);
      board[r][c] = word[i]; // Reset the board, very important
    }
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        dfs(i, j, 0);
        if (result) return result;
      }
    }
  }

  return result;
};
