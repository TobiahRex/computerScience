/*
1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
cannot use additional data structures?
Hints: #44, #7 7 7, #732
*/

const isUnique_FAST = (string) => {
  const dictionary = {};
  for (let i = 0; i < string.length; i++) {
    if (!(string[i] in dictionary)) dictionary[string[i]] = 1;
    else dictionary[string[i]] += 1;
  }
  return Object
  .keys(dictionary)
  .filter((key) => dictionary[key] > 1)
  .length ? false : true;
}

console.log(isUnique_FAST('abcdefghjiklmnopqrstuvwxyzz'));
