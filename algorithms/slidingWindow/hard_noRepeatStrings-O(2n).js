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
  ].map((input) => noRepeatStrings(input.str));

  console.log('answers: ', answers);
})();

function noRepeatStrings(str) {
  let memo = {},
    windowStart = 0,
    windowEnd = 0,
    maxLength = 0,

    nChar = '',
    badChar = '';


    while(windowEnd < str.length) {
      nChar = str[windowEnd];
      if (!memo[nChar]) {
        memo[nChar] = 1;
      } else {
        memo[nChar] += 1;
      }


      while(memo[nChar] > 1) {
        badChar = str[windowStart];
        memo[badChar] -= 1;
        windowStart += 1;
      }
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
*/

/*
Control Flow

a // windowStart // windowEnd
a
b
c
c
b
b
// result
{
a: 1
}
// ----------------

a // windowStart
a // windowEnd
b
c
c
b
b
// result
{
a: 2
}
// memo[str[windowEnd]]
//--- illegal
/*
total += 1;
if:(memo[str[windowEnd]] > 1
until, windowEnd === windowStart || memo[str[windowEnd]] > 1
{
memo[str[windowEnd++]] -= 1
total -= 1
}
{
  a: 1 // windowStart // windowEnd
}
// ----------------
a
a // windowStart
b // windowEnd
c
c
b
b
// result
{
  a: 1
  b: 1
}
// ----------------
a
a // windowStart
b
c // windowEnd
c
b
b
// result
{
  total: 3
  a: 1
  b: 1
  c: 1
}
// ----------------
a
a // windowStart
b
c
c // windowEnd
b
b
// result
{
  a: 1
  b: 1
  c: 2
}
// --- illegal
a
a
b // windowStart
c
c // windowEnd
b
b
{
  total: 3,
  b: 1
  c: 2
}
// -- illegal
a
a
b
c // windowStart
c // windowEnd
b
b
{
  total: 2,
  c: 2
}
// -- illegal
a
a
b
c
c // windowEnd // windowStart
b
b
{
  total: 2,
  c: 1
}
// -- illegal

*/
