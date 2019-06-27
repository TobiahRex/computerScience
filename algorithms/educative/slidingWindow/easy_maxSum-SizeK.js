(() => {
  let k = 3,
    // arr = [1, 1, 1, 1, 1, 1],
    // arr = [2, 3, 4, 1, 5],
    arr = [2, 1, 5, 1, 3, 2],
    answer = maxSumSizeK(arr, k);

  console.log(answer);
})();

function maxSumSizeK(arr, k) {
  let count = 0,
    back = 0,
    front = 0,
    lastSum = 0,
    currentSum = 0;

  while(front < arr.length) {
    if (count < k) {
      currentSum += arr[front++];
      count += 1;
      if (currentSum > lastSum) lastSum = currentSum;
    } else {
      currentSum -= arr[back++];
      count -= 1;
    }
  }
  return lastSum;
}

/*
Problem Statement
Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any subarray of size ‘k’.

Example 1:

Input: [2, 1, 5, 1, 3, 2], k=3
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].
Example 2:

​Input: [2, 3, 4, 1, 5], k=2
Output: 7
Explanation: Subarray with maximum sum is [3, 4].
*/
