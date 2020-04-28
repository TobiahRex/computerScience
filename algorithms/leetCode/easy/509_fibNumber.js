/*
  Problem Description:
  The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

  F(0) = 0,   F(1) = 1
  F(N) = F(N - 1) + F(N - 2), for N > 1.
  Given N, calculate F(N).



  Example 1:

  Input: 2git tag
  Output: 1
  Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
  Example 2:

  Input: 3
  Output: 2
  Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
  Example 3:

  Input: 4
  Output: 3
  Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

  Runtime: 52 ms, faster than 79.19% of JavaScript online submissions for Fibonacci Number.
  Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions for Fibonacci Number.

  Time: 18 Minutes 😂
*/

(() => {
  const answers = [
    {
      input: 2,
    },
    {
      input: 5,
    },
    {
      input: 6,
    },
  ].map(getFibN)
  console.log('answers: ', answers);
})();

// NOTE: getFibN(0) expects 0
function getFibN({ input }) {
  if (input === 0) return 0;
  if (input <= 2) return 1;

  let num1 = 1;
  let num2 = 1;
  let answer = 0;
  for (let i = 2; i < input; i++) {
    answer = num1 + num2;
    num1 = num2;
    num2 = answer;
  }
  return answer;
}
