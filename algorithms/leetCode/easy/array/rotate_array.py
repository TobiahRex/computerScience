"""
Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: [-1,-100,3,99] and k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
Note:

Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?
"""

class Solution:
    def rotate(self, nums, k):
        last_k = nums[-k:]
        front_k = nums[0:len(nums) - k]
        return last_k + front_k

if __name__ == '__main__':
    cases = [
        {
            'input': {
                'nums': [1,2,3,4,5,6,7],
                'k': 3,
            },
            'expect': [5,6,7,1,2,3,4]
        },
        {
            'input': {
                'nums': [-1,-100,3,99],
                'k': 2,
            },
            'expect': [3,99,-1,-100]
        },
    ]

    results = list(
        map(lambda args: Solution().rotate(args.get('input').get('nums'), args.get('input').get('k')), cases))
    for i in range(0, len(results)):
        print(f'results[i]: {results[i]}')
        result = results[i] == cases[i].get('expect')
        print(f'{i + 1}: {result}\n')

