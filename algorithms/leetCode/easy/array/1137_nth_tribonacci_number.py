"""
The Tribonacci sequence Tn is defined as follows:

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.



Example 1:

Input: n = 4
Output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
Example 2:

Input: n = 25
Output: 1389537
"""


class Solution:
    def tribonacci(self, n, memo={}):
        if not n or n <= 0: return 0
        if n == 1: return 1
        if n in memo: return memo.get(n)
        else:
            n1 = memo.get(n - 3) or self.tribonacci(n - 3, memo)
            n2 = memo.get(n - 2) or self.tribonacci(n - 2, memo)
            n3 = memo.get(n - 1) or self.tribonacci(n - 1, memo)
            memo[n] = n1 + n2 + n3
        return memo[n]

    def best(self, n):
        a, b, c = 0, 1, 1
        for i in range(n):
            a, b, c = b, c, a+b+c
        return a


if __name__ == '__main__':
    cases = [
        {
            'input': 4,
            'expect': 4
        },
        {
            'input': 6,
            'expect': 7
        },
        {
            'input': 25,
            'expect': 1389537
        },
    ]

    results = list(
        map(lambda args: Solution().tribonacci(args.get('input')), cases))
    for i in range(0, len(results)):
        result = results[i] == cases[i].get('expect')
        print(f'{i + 1}: {result}')
