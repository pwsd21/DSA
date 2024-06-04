function encodedChar(str, k) {
  var i, j;
  var n = str.length;
  // To store length of substring
  var len;
  var num;
  // To store frequency of substring
  var freq;
  i = 0;
  while (i < n) {
    j = i;
    len = 0;
    freq = 0;
    while (j < n && str[j].match(/^[0-9a-z]+$/)) {
      j++;
      len++;
    }
    // Find frequency of preceding substring.
    while (j < n && str[j].match(/^[0-9]+$/)) {
      freq = freq * 10 + (str[j] - "0");
      j++;
    }
    // Find length of substring when it is repeated.
    num = freq * len;
    // If length of repeated substring is less than k then required character is present in next
    if (k > num) {
      k -= num;
      i = j;
    }
    // If length of repeated substring is more or equal to k then required character lies in current substring.
    else {
      k--;
      k %= len;
      return str[i + k];
    }
  }
  // This is for the case when there are no repetition in string. e.g. str="abced".
  return str[k - 1];
}
