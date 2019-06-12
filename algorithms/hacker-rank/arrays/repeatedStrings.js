(() => {
  // const answer = repeatedString('a', 10000);
  const answer = repeatedString('bcbccacaacbbacabcabccacbccbababbbbabcccbbcbcaccababccbcbcaabbbaabbcaabbbbbbabcbcbbcaccbccaabacbbacbc', 649606239668);
  // const answer = repeatedString('aba', 100000);
  console.log(answer - 162401559918)
  // 395886275361
})()

function repeatedString(str, n) {
  if (str.length === 1) return n;
  if (n < str.length) str.split('').slice(0, n).reduce((acc, s) => (s === 'a' ? acc += 1 : acc), 0)

  let sum = 0,
      i = 0,
      j = 0,
      oneTotal = str.split('').reduce((acc, s) => (s === 'a' ? acc += 1 : acc), 0);


  str.length /*?*/
  if (((n * oneTotal) % str.length) !== 0) {
    sum = Math.floor(n / str.length) * oneTotal;
    const multiplier = Math.floor(n / str.length);
    const remaining = n - (str.length * multiplier);
    const minorTotal = str
      .split('')
      .slice(0, remaining)
      .reduce((acc, s) => (s === 'a' ? acc += 1 : acc), 0);
    sum += minorTotal;
  } else {
    oneTotal
    sum = ((n * oneTotal) / str.length);
    sum
  }

  return sum;
}
