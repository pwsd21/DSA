// Subsequence
const subSeq = (p, up) => {
  if (up === "") {
    console.log(p);
    return;
  }
  let ch = up.charAt(0);
  subSeq(p + ch, up.substring(1));
  subSeq(p, up.substring(1));
};

subSeq("", "abc");

// Print in Array - Subset

const subSet = (p, up) => {
  if (up === "") {
    let finalArr = [];
    finalArr.push(p);
    return finalArr;
  }

  let ch = up.charAt(0);
  let left = subSet(p + ch, up.substring(1));
  let right = subSet(p, up.substring(1));
  return [...left, ...right];
};

console.log(subSet("", "abc"));
