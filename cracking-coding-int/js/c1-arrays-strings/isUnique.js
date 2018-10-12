/*
1.1

a) Implement an algorithm to determine if a string has all unique characters.

b) What if you cannot use additional data structures?
*/

// a)
const isUnique_1 = Str => {
  let result = true;

  const reducer = Str.split('').reduce((memo, char) => {
    if (char in memo) result = false;
    else memo[char] += 1;
    return memo;
  }, {});
  return result;
}
console.log(isUnique_1('aaabbbccc'));
console.log(isUnique_1('abcdefghijklmnopqrstuvwxyz'));

// b)
const isUnique_2 = s => {

}
