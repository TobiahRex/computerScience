"""
"""

class Solution:
    def get_solution(self, input):
        return

if __name__ == '__main__':
    cases = [
        {
            'input': [1,1,2,3,4],
            'expect': 4
        },
        {
            'input': [1],
            'expect': 1
        },
        {
            'input': [],
            'expect': 0
        },
        {
            'input': [1,1,1,1,1,1,1,1],
            'expect': 1
        },
    ]

    results = list(
        map(lambda args: Solution().get_solution(args.get('input')), cases))
    for i in range(0, len(results)):
        result = results[i] == cases[i].get('expect')
        print(f'{i + 1}: {result}')

