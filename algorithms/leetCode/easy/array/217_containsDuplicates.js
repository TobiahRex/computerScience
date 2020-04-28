/*
  Problem Description:
  Say you have an array for which the ith element is the price of a given stock on day i.

  Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

  Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
*/

/*
// O(n*LogN)
const containsDuplicates = ({ nums }) =>
  nums
  .sort()
  .reduce((acc, n, i, arr) => {
    if (n === arr[i - 1]) {
      acc = true;
      arr.splice(0);
    }
    return acc;
  }, false);
*/

// O(n)
const containsDuplicates = ({ nums }) =>
  nums.reduce((acc, n) => {
    if (acc.memo.has(n)) {
      acc.answer = true;
      nums.splice(0);
    } else {
      acc.memo.add(n);
    }
    return acc;
  }, {
    answer: false,
    memo: new Set(),
  }).answer;

// NOTE: Best solution from other users
const containsDuplicate = (nums) => {
  const set = new Set(nums);
  return nums.length !== set.size;
}


(() => {
  const answers = [
    {
      nums: [1, 2, 3, 4],
      expect: false,
    },
    {
      nums: [1, 5, 3, 2, 1],
      expect: true,
    },
    {
      nums: [1, 1, 1, 1, 3, 4],
      expect: true,
    },
  ].map(containsDuplicates)
  console.log('answers: ', answers);
})();