(() => {
  let k = 3,
    // arr = [1, 1, 1, 1, 1, 1],
    // arr = [2, 3, 4, 1, 5],
    // arr = [ 1,1,1,1,1,1 ],
    arr = 'carrace',
    // arr = [ 1, 7, 3, 6, 5, 6 ],
    answer = anagram(arr);

  console.log(answer);
})();

function anagram(word) {
  const dict = {};
  let results = [];

  let nextWord = word;
  for (let i = 0; i < word.length; i++) {
    let letter = nextWord[0];
    let rest = nextWord.slice(1);
    nextWord = rest + letter;

    if (!dict[nextWord]) dict[nextWord] = true;
    const reverseWord = nextWord.split('').reverse().join('');

    if (!dict[reverseWord]) {
      dict[reverseWord] = true;
    }

    if (nextWord === reverseWord) results.push(nextWord);
  }
  console.log(dict)
  return results;
}
// function pivot(numbers) {
//     let leftTotal = 0;
//     let rightTotal = numbers.reduce((a, b) => a + b, 0);
//     rightTotal
//     let pivot = 0;
//     const results = [];
//     while (pivot < numbers.length) {
//         const currentNum = numbers[pivot];
//         rightTotal -= currentNum;
//         leftTotal += currentNum;
//         leftTotal
//         rightTotal
//         console.log(leftTotal === rightTotal)
//         if (leftTotal === rightTotal) results.push(numbers[pivot]);
//         else {
//           // rightTotal += numbers[pivot];
//         }
//         results
//         pivot += 1;
//     }
//     results
//     return (results[0] || -1);
// }

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
