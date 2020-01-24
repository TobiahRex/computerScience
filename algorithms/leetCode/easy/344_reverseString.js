/*
  Problem Description:
  Write a function that reverses a string. The input string is given as an array of characters char[].

  Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

  You may assume all the characters consist of printable ascii characters.



  Example 1:

  Input: ["h","e","l","l","o"]
  Output: ["o","l","l","e","h"]
  Example 2:

  Input: ["H","a","n","n","a","h"]
  Output: ["h","a","n","n","a","H"]

  Start: 6:06am
  End: 6:08am
*/


(() => {
  const answers = [
    {
      s: ["h","e","l","l","o"],
      expect: ["o","l","l","e","h"],
    },
    {
      s: ["H","a","n","n","a","h"],
      expect: ["o","l","l","e","h"],
    }
  ].map(getAnswer)
  console.log('answers: ', answers);
})();

function getAnswer({ s }) {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    const left = s[i];
    const right = s[j];
    s[i] = right;
    s[j] = left;

    // [s[j], s[i]] = [s[i], s[j]]; space is a little larger
  }
  return s
}
