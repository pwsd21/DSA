const ascii = (p, up) => {
  if (up === "") {
    console.log(p);
    return;
  }

  let ch = up.charAt(0);
  ascii(p + ch, up.substring(1));
  ascii(p, up.substring(1));
  ascii(p + ch.charCodeAt(0), up.substring(1));
};

ascii("", "abc");

// arrays

const asciiSubset = (p, up) => {
  if (up === "") {
    let arr = [];
    arr.push(p);
    return arr;
  }

  let ch = up.charAt(0);

  let first = asciiSubset(p + ch, up.substring(1));
  let second = asciiSubset(p, up.substring(1));
  let third = asciiSubset(p + ch.charCodeAt(0), up.substring(1));

  return [...first, ...second, ...third];
};

console.log(asciiSubset("", "abc"));
