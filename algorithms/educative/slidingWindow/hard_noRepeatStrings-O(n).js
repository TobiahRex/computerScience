let BigOh = 0;
(() => {
  const answers = [
    {
      str: "aabccbb",
    },
    {
      str: "abbbb",
    },
    {
      str: "abccde",
    },
    {
      str: "abcabcddefghaaaaaaa",
    },
    {
      str: "abcdefghi",
    },
  ].map((input) => noRepeatStrings(input.str));

  console.log('answers: ', answers);
})();

function noRepeatStrings(str) {
  let memo = {},
    windowStart = 0,
    windowEnd = 0,
    maxLength = 0,
    rightChar = '';


    while(windowEnd < str.length) {
      rightChar = str[windowEnd];
      if (rightChar in memo) {
        windowStart = Math.max(memo[rightChar] + 1, windowStart);
      }
      memo[rightChar] = windowEnd;

      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
      windowEnd += 1;
    }
    return maxLength;
}
/*
  Problem Statement
  Given a string, find the length of the longest substring which has no repeating characters.

  Example 1:

  Input: String="aabccbb"
  Output: 3
  Explanation: The longest substring without any repeating characters is "abc".
  Example 2:

  Input: String="abbbb"
  Output: 2
  Explanation: The longest substring without any repeating characters is "ab".
  Example 3:

  Input: String="abccde"
  Output: 3
  Explanation: Longest substrings without any repeating characters are "abc" & "cde".

  // NOTE: Below is an example of what happens whenever you have a repeated pattern,
  where the last known index is already outside the beginning of the window. Therefore,
  you have to fall-back on where the current window start is already at.
  a
  b
  c
  c
  b
  a

*/
