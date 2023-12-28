const pad = (p, up) => {
  if (up === "") {
    console.log(p);
    return p;
  }

  let digit = Number(up.charAt(0));
  for (let i = (digit - 1) * 3; i < digit * 3; i++) {
    let ch = String.fromCharCode("a".charCodeAt(0) + i);
    pad(p + ch, up.substring(1));
  }
};
// pad("", "12");

// arraylist

const padArray = (p, up) => {
  let result = [];
  if (up === "") {
    result.push(p);
    return result;
  }

  let digit = Number(up.charAt(0));
  for (let i = (digit - 1) * 3; i < digit * 3; i++) {
    let ch = String.fromCharCode("a".charCodeAt(0) + i);
    result.push(...padArray(p + ch, up.substring(1)));
  }
  return result;
};

console.log(padArray("", "12"));

// Count
const padCount = (p, up) => {
  if (up === "") {
    return 1;
  }
  let count = 0;
  let digit = Number(up.charAt(0));
  for (let i = (digit - 1) * 3; i < digit * 3; i++) {
    let ch = String.fromCharCode("a".charCodeAt(0) + i);
    count = count + padCount(p + ch, up.substring(1));
  }
  return count;
};

console.log(padCount("", "12"));
