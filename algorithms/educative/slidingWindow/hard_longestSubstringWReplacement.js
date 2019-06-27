let BigOh = 0;
(() => {
  const answers = [
    {
      str: "aabccbb", // answer = 5
      k: 2,
    },
    {
      str: "abbcb", // answer = 4
      k: 1,
    },
    {
      str: "abccde", // answer = 3
      k: 1,
    },
  ].map((input) => repeatSubstringWReplacement(input));

  console.log('answers: ', answers);
})();

function repeatSubstringWReplacement({ k, str }) {
  let memo = {},
    wStart = 0,
    wEnd = 0,
    max = 0,
    maxRepeatCount = '';

  while(wEnd < str.length) {
    if (!(str[wEnd] in memo)) memo[str[wEnd]] = 1;
    else memo[str[wEnd]] += 1;
    maxRepeatCount = Math.max(maxRepeatCount, memo[str[wEnd]]);

    if ((wEnd - wStart + 1) - maxRepeatCount > k) {
      memo[str[wStart++]] -= 1;
    }
    max = Math.max(max, (wEnd - wStart + 1));
    wEnd += 1;
  }
  return max;
}
/*
Problem Statement
Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.

Example 1:

"aabccbb"
Input: String="aabccbb", k=2
Output: 5
Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".
Example 2:

​
Input: String="abbcb", k=1
Output: 4
Explanation: Replace the 'c' with 'b' to have a longest repeating substring "bbbb".
Example 3:

Input: String="abccde", k=1
Output: 3
Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".
// */
// {
//   a: 2, // window start & window end
// }
// k = 2
// // solution: 'aa'
// //------------
// {
//   a: 2, // window start
//   b: 1, // window end
// }
// k = 1 // k - 1
// // solution: 'aaa'
// //------------
// {
//   a: 2, // window start
//   b: 1,
//   c: 1, // window end
// }
// k = 0 // k - 1
// // solution: 'aaaa'
// //------------
// {
//   a: 2, // window start
//   b: 1,
//   c: 2, // window end
// }
// k = -1 // k - 1 => illegal.
// // solution: 'aaaac'
// /*
//   - we move the window start forward to gain a k value greater than -1.
//   - we check to see if the new substring has all but one letter.
//
//
// */
// {
//   a: 1, // window start
//   b: 1,
//   c: 2, // window end
// }
// k = -1 // k - 1 => illegal.
// // solution: 'aaaac'
//
// /*
//   Questions
//   - [ ] Do we keep a frequency or an index as the value of the dictionary?
// */
