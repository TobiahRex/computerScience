let BigOh = 0;
(() => {
  const answers = [{
      arr: [2, 1, 5, 2, 3, 2],
      size: 7,
    },
    {
      arr: [2, 1, 5, 2, 8],
      size: 7,
    },
    {
      arr: [3, 4, 1, 1, 6],
      size: 8,
    }].map((input) => smallestArr(input.arr, input.size));

  console.log('answers: ', answers);
})();

function smallestArr(arr, s) {
  /*
  add up the numbers until the sum is greater than s.
  - then decrement from the beginning.
  - once the sum is less than s, save the answer, or not.
  - then add stepwise forward.
  */
  let
    count = 0,
    minLength = Infinity,
    sum = 0,
    windowStart = 0;
    windowEnd = 0;

  while(windowEnd < arr.length) {
    sum += arr[windowEnd++];
    while(sum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart);
      sum -= arr[windowStart++];
    }
  }
  if (minLength === Infinity) return 0;
  return minLength;
}
/*
Problem Statement
Given an array of positive numbers and a positive number ‘S’,
find the length of the smallest subarray whose sum is greater than or equal to
‘S’. Return 0, if no such subarray exists.

Example 1:

Input: [2, 1, 5, 2, 3, 2], S=7
Output: 2
Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].
Example 2:

Input: [2, 1, 5, 2, 8], S=7
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].
Example 3:

Input: [3, 4, 1, 1, 6], S=8
Output: 3
Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].
*/
