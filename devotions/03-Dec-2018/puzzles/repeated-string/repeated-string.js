const repeatedString = (str, n) => {
  let aCount = str.split('').reduce((acc, nextChar) => {
    if (nextChar === 'a') acc += 1;
    return acc;
  }, 0);
  // let multiplier = Math.ceil(n / str.length);
  // let newStr = str.repeat(multiplier);
  // newStr
  // let answer = 0, i = n, j = 0;
  // while(i < newStr.length) {
  //   if (newStr[j] === 'a') answer += 1;
  //   j += 1;
  //   // if j catches up to i // move i forward by n places.
  //   if (j === i) i += n;
  // }
  //
  // return answer;
}
// console.log(repeatedString('aba', 10));
console.log(repeatedString('a', 1000000000000));
