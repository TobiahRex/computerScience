const repeatedString = (str, n) => {
  let multiplier = 0;
  if (str.length % n !== 0) multiplier = (str.length / n) + 1;
  else multiplier = str.length / n;

  let newStr = String.repeat(str, multiplier);
  // for(let i = 0; i < newStr.length; i += n) {
  //   for (let j = i; j < (i + n); j++) {
  //     if (newStr[j] === 'a') answer += 1;
  //   }
  // }
  let answer = 0, i = n, j = 0;
  while(i < newStr.length) {
    if (newStr[j] === 'a') answer += 1;
    j += 1;
    // if j catches up to i // move i forward by n places.
    if (j === i) i += n;
  }

  return answer;
}
console.log(repeatedString('aba', 10));
