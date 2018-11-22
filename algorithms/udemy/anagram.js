function validAnagram(str1, str2) {
  const memo = {};
  for (let char of str1) memo[char] = (memo[char] || 0) + 1;

  let result = true;
  for (let char of str2) {
    if (!(char in memo)) result = false;
    else {
      memo[char] -= 1;
      if (memo[char] === 0) delete memo[char];
    }
  }
  return result;
}
// what are the expected string input?
// - letters, numbers, whitespace, symbols, etc.
console.log(
  validAnagram('ytoby', 'boyyt')
);
