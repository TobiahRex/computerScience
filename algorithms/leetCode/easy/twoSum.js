(() => {
  const answers = [
    {
      _nums: [-1,-2,-3,-4,-5],
      target: -8,
    },
    {
      _nums: [150,24,79,50,88,345,3],
      target: 200,
    },
    {
      _nums: [3, 2, 4],
      target: 6,
    },
    {
      _nums: [3, 3],
      target: 6,
    }
  ].map(twoSum)
  console.log('answers: ', answers);
})();

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum({ _nums, target }) {
  let [...nums] = _nums;
  nums.sort((a, b) => a - b);

  let left = 0,
      right = nums.length - 1,
      sum = nums[left] + nums[right];

  while(sum !== target) {
    if (sum < target) left += 1;
    else if (sum > target) right -= 1;

    sum = nums[left] + nums[right];
  }

  let idx1 = _nums.indexOf(nums[left]);
  _nums[idx1] = Infinity;
  let idx2 = _nums.indexOf(nums[right]);

  return (idx1 > idx2 ? [idx2, idx1] : [idx1, idx2]);
};


/*
  Problem Description:


  Given an array of integers, return indices of the two numbers such that they add up to a specific target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  Example:

  Given nums = [2, 7, 11, 15], target = 9,

  Because nums[0] + nums[1] = 2 + 7 = 9,
  return [0, 1].
*/
