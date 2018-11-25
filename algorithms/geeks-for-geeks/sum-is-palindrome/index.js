const checkPalindrome = (n) => {
  console.log('sum: ', n);
  let answer = true;
  const stringN = String(n);
  if (stringN.length === 1) return answer;

  for (let i = 0, j = stringN.length - 1; i < j; i++, j--) {
    if (stringN[i] !== stringN[j]) {
      answer = false;
      break;
    }
  }
  return answer;
}

const sumDigits = (n) => String(n).split('').reduce((a, n) => a += Number(n), 0);


console.log(
  [
    111,
    121,
    9999991,
    89,
  ].map((n) => checkPalindrome(sumDigits(n)))
);
