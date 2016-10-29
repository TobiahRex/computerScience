/*
--------------------------------
Step 1:
Check to see if two Strings are Anagrams.

Two strings are anagrams if
they are written using the same exact letters,
ignoring spaces,
punctuation and capitalization.

Each letter should have the same count in both strings.
For example,
Army and Mary are anagram of each other.
123456 and 354261 are anagrams of each other.
--------------------------------
Step 2:
1. dictionary
2. s1
3. s2

--------------------------------
*/
const anagramCheck = (sOne, sTwo) => {
  if (String(sOne).length !== String(sTwo).length) return false;

  return String(sOne)
  .split('')
  .map((x) => {
    if (String(sTwo).includes(x) === false) return 0;
  })
  .includes(0) === true ?  false : true;
}

console.log('ANSWER >>> ', anagramCheck(12345, 4251));
