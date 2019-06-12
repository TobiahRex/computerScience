(() => {
    [
      [3, 4, 6, 1, 6, 7],
      [ 1, 7, 3, 6, 5, 6 ],
      [1, 1, 1, 1, 1, 1],
      [2, 3, 4, 1, 5],
    ].forEach((arr) => {
      answer = pivot(arr);
      console.log(answer);
    })
})();

function pivot(numbers) {
    let leftTotal = 0;
    let rightTotal = numbers.reduce((a, b) => a + b, 0);
    rightTotal
    let pivot = 0;
    const results = [];
    while (pivot < numbers.length) {
        const currentNum = numbers[pivot];

        rightTotal -= currentNum;
        leftTotal += currentNum;
        if (leftTotal > rightTotal) {
          if ((leftTotal - currentNum) === rightTotal) {
            results.push(currentNum);
          }
        } else if (rightTotal > leftTotal) {
          if ((rightTotal - numbers[pivot + 1]) === leftTotal) {
            results.push(numbers[pivot + 1]);
          }
        } else if (rightTotal === leftTotal) {
          results.push(currentNum);
        }

        results
        pivot += 1;
    }
    results
    return (results[0] || -1);
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
