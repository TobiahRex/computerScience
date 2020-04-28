/*
  Problem Description:
  Say you have an array for which the ith element is the price of a given stock on day i.

  Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

  Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
*/


(() => {
  const answers = [
    // {
    //   prices: [7, 1, 5, 3, 6, 4],
    //   expect: 7,
    // },
    // {
    //   prices: [1, 2, 3, 4, 5],
    //   expect: 4,
    // },
    // {
    //   prices: [7, 6, 4, 3, 1],
    //   expect: 0,
    // },
    {
      prices: [1, 2],
      expect: 0,
    },
  ].map(maxProfit)
  console.log('answers: ', answers);
})();

function maxProfit({ prices }) {
  if (prices.length <= 1) return 0;

  let hasPosition = false;
  let profit = 0;
  let entry = 0;
  for (let i = 1; i < prices.length; i++) {
    if (!hasPosition) {
      if (prices[i] > prices[i - 1]) {
        entry = prices[i - 1];
        hasPosition = true;
      }
    } else {
      if (prices[i] < prices[i - 1]) {
        profit += (prices[i - 1] - entry);
        hasPosition = false;
      }
    }

    if ((i === (prices.length - 1)) && hasPosition) {
      profit += (prices[i] - entry);
    }
  }

  return profit;
}