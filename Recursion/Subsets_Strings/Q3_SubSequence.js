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

// Print in Array

const subSeqRet = (p, up) => {
  if (up === "") {
    let finalArr = [];
    finalArr.push(p);
    return finalArr;
  }

  let ch = up.charAt(0);
  let left = subSeqRet(p + ch, up.substring(1));
  let right = subSeqRet(p, up.substring(1));
  return [...left, ...right];
};

console.log(subSeqRet("", "abc"));
