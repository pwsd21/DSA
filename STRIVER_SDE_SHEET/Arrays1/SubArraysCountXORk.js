function subarraysWithXorK(a, k) {
  const n = a.length; //size of the given array.
  let xr = 0;
  const mpp = new Map(); //declaring the map.
  mpp.set(xr, 1); //setting the value of 0.
  let cnt = 0;

  for (let i = 0; i < n; i++) {
    // prefix XOR till index i:
    xr = xr ^ a[i];

    //By formula: x = xr^k:
    const x = xr ^ k;

    // add the occurrence of xr^k
    // to the count:
    cnt += mpp.get(x) || 0;

    // Insert the prefix xor till index i
    // into the map:
    mpp.set(xr, (mpp.get(xr) || 0) + 1);
  }
  return cnt;
}

const a = [4, 2, 2, 6, 4];
const k = 6;
const ans = subarraysWithXorK(a, k);
console.log(`The number of subarrays with XOR k is: ${ans}`);
