(() => {
  const answers = [
    // {
    //   s: 'pwcwkew',
    // },
    // {
    //   s: 'dvdf',
    // }
    {
      s: 'abba',
    }
  ].map(getAnswer)
  console.log('answers: ', answers);
})();

function getAnswer({ s }) {
  let start = 0,
      end = 0,
      max = 0,
      memo = {};

  while(end < s.length) {
    let rightChar = s[end];
    if (rightChar in memo) {
      rightChar
      memo
      start
      memo[rightChar] /*?*/
      start = memo[rightChar] + 1;
      // start = Math.max(start, memo[rightChar] + 1);
      start
    }
    memo[rightChar] = end;

    max = Math.max(max, end - start + 1);
    end += 1;
  }
  return max;
}

/*
  Problem Description:
  Given a string, find the length of the longest substring without repeating characters.

  Example 1:
  Input: "abcabcbb"
  Output: 3
  Explanation: The answer is "abc", with the length of 3.

  Example 2:
  Input: "bbbbb"
  Output: 1
  Explanation: The answer is "b", with the length of 1.

  Example 3:
  Input: "pwwkew"``
  Output: 3
  Explanation: The answer is "wke", with the length of 3.

  Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/


/* SCRATCH PAPER

{
  p: 0
  w: 3
  c: 2
  k: 4
  e: 5
}


0 p
1 w
2 c
3 w
4 k  start
5 e
6 w  end

max = 3

--------------------
{
  t: 0,
  m: 2
  z: 3
}

t
m
m start
z end
u
x
t
--------------------
{
  a: 0,
  b: 1
}

a
b
b start
a end

*/
