const repeatedString = (s, n) => {
  const findAs = (str) => {
    let result = 0;
    for(let i = 0; i < str.length; i++)
      if (str[i] === 'a') result += 1;
    return result;
  }

  let aCount = findAs(s);

  if (n % s.length === n) {
    return Math.ceil((n / s.length) * aCount);
  } else if (n % s.length === 0) {
    return (n / s.length) * aCount;
  } else {
    let newStr = s.slice(0, n % s.length),
      aCount_other = findAs(newStr);

    return Math.floor((n / s.length) * aCount) + aCount_other;
  }
}
console.log(repeatedString('aba', 10));
console.log(repeatedString('a', 1000000000000));
console.log(repeatedString('ababa', 3));
console.log(repeatedString('cfimaakj', 554045874191)); // expected: 138511468548
