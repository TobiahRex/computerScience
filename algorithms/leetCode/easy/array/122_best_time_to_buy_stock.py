"""
122.
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

Example 1:

Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
             Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Example 2:

Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.
Example 3:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
"""


class Solution:
    def maxProfit(self, prices):
        if len(prices) in [0, 1]: return 0

        profit = 0
        future = 1
        active_trade = False
        entry = 0
        for i in range(len(prices) - 1):
            if not active_trade:
                if prices[i] < prices[future]:
                    active_trade = True
                    entry = prices[i]
            else:
                if prices[future] < prices[i]:
                    profit += prices[i] - entry
                    active_trade = False
            future += 1
        if active_trade:
            profit += prices[-1] - entry
        return profit

if __name__ == '__main__':
    cases = [
        {
            'input': [7, 1, 5, 3, 6, 4],
            'expect': 7
        },
        {
            'input': [1, 2, 3, 4, 5],
            'expect': 4
        },
        {
            'input': [7, 6, 4, 3, 1],
            'expect': 0
        },
    ]

    results = list(
        map(lambda args: Solution().maxProfit(args.get('input')), cases))
    for i in range(0, len(results)):
        result = results[i] == cases[i].get('expect')
        if result:
            print(f'{i + 1}: {result}')
        else:
            print(f"{i + 1}: got -> {results[i]} | expected -> {cases[i].get('expect')}")
