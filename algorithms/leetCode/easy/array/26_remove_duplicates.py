"""
#26
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
---------------------------
Example 1:
Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.
---------------------------
Example 2:
Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.
---------------------------
SLXN THEORY
flag index | first index
    while index is same as next index
        move scout forward

    if scout is not same as source
        move flag forward
        increment flag counter


PSUEDO CODE
if not nums: return 0

unique_ix = 0
unique_ct = 1
for i in range(0, len(nums)):

"""

class Solution:
    def remove_duplicates(self, nums) -> int:
        if not nums: return 0

        unique_ix = 0
        unique_ct = 1
        for i in range(0, len(nums)):
            if nums[i] == nums[unique_ix]:
                continue
            elif nums[i] is not None:
                unique_ix += 1
                unique_ct += 1
                nums[unique_ix] = nums[i]
        return unique_ct

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
        map(lambda args: Solution().remove_duplicates(args.get('input')), cases))
    for i in range(0, len(results)):
        result = results[i] == cases[i].get('expect')
        print(f'{i + 1}: {result}')

