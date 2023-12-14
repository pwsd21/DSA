/*
 *****
 ****
 ***
 **
 *
 */

const Pattern = (r, c) => {
  if (r == 0) {
    return;
  }
  if (c < r) {
    process.stdout.write("*");
    Pattern(r, c + 1);
  } else {
    console.log();
    Pattern(r - 1, (c = 0));
  }
};

Pattern(4, 0);

/**
 *
 * *
 * **
 * ***
 * ****
 */

const Pattern2 = (r, c) => {
  if (r == 0) {
    return;
  }

  if (c < r) {
    Pattern2(r, c + 1);
    process.stdout.write("*");
  } else {
    Pattern2(r - 1, (c = 0));
    console.log();
  }
};

Pattern2(4, 0);
