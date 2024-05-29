// count no of steps
const mazeCount = (r, c) => {
  if (r == 1 || c == 1) {
    return 1;
  }

  let left = mazeCount(r - 1, c);
  let right = mazeCount(r, c - 1);
  return left + right;
};

console.log(mazeCount(3, 7));

// Path

const mazePath = (p, r, c) => {
  if (r == 1 && c == 1) {
    console.log(p);
    return 1;
  }

  if (r > 1) {
    mazePath(p + "D", r - 1, c);
  }
  if (c > 1) {
    mazePath(p + "R", r, c - 1);
  }
};

mazePath("", 3, 3);

// Array list for path

const mazePathArray = (p, r, c) => {
  let result = [];
  if (r == 1 && c == 1) {
    result.push(p);
  }

  if (r > 1) {
    result.push(...mazePathArray(p + "D", r - 1, c)); // result = result.concat(mazePathArray(p + "D", r - 1, c));
  }

  if (c > 1) {
    result.push(...mazePathArray(p + "R", r, c - 1));
  }
  return result;
};

console.log(mazePathArray("", 3, 3));

// Diagonally

const mazeDiagonal = (p, r, c) => {
  let result = [];
  if (r == 1 && c == 1) {
    result.push(p);
  }

  if (r > 1 && c > 1) {
    result.push(...mazeDiagonal(p + "D", r - 1, c - 1));
  }
  if (r > 1) {
    result.push(...mazeDiagonal(p + "V", r - 1, c));
  }

  if (c > 1) {
    result.push(...mazeDiagonal(p + "H", r, c - 1));
  }
  return result;
};

console.log(mazeDiagonal("", 3, 3));
