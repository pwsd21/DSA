const mazeAllPaths = (p, maze, r, c, path, step) => {
  if (r === maze.length - 1 && c === maze[0].length - 1) {
    path[r][c] = step;
    for (let row of path) {
      console.log(row.join(" "));
    }
    console.log(p);
    console.log();
    return;
  }

  if (!maze[r][c]) {
    return;
  }

  maze[r][c] = false;
  path[r][c] = step;

  if (r < maze.length - 1) {
    mazeAllPaths(p + "D", maze, r + 1, c, path, step + 1);
  }

  if (c < maze[0].length - 1) {
    mazeAllPaths(p + "R", maze, r, c + 1, path, step + 1);
  }

  if (r > 0) {
    mazeAllPaths(p + "U", maze, r - 1, c, path, step + 1);
  }

  if (c > 0) {
    mazeAllPaths(p + "L", maze, r, c - 1, path, step + 1);
  }

  maze[r][c] = true;
  path[r][c] = 0;
};

const board = [
  [true, true, true],
  [true, true, true],
  [true, true, true],
];

const path = new Array(board.length)
  .fill(null)
  .map(() => new Array(board[0].length).fill(0));

mazeAllPaths("", board, 0, 0, path, 1);
