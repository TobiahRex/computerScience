"""
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
"""


class Solution:
    def get_solution(self, input):
        nums_set = set(input)
        return len(nums_set) != len(input)


if __name__ == '__main__':
    cases = [
        {
            'input': [1, 2, 3, 1],
            'expect': True
        },
        {
            'input': [1, 2, 3, 4],
            'expect': False
        },
        {
            'input': [1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
            'expect': True
        },
    ]

    results = list(
        map(lambda args: Solution().get_solution(args.get('input')), cases))
    for i in range(0, len(results)):
        result = results[i] == cases[i].get('expect')
        print(f'{i + 1}: {"Good" if result else "Bad"}')
