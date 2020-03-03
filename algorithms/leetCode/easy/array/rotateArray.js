/*
  Problem Description:

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
*/


(() => {
    const answers = [
        {
          input: {
            nums: [1, 2, 3, 4, 5, 6, 7],
            k: 3,
          },
          expect: [5, 6, 7, 1, 2, 3, 4]
        },
        // {
        //   input: {
        //     nums: [1, 2, 3, 4, 5, 6, 7],
        //     k: 3,
        //   },
        //   expect: [5, 6, 7, 1, 2, 3, 4]
        // },
        // {
        //   input: {
        //     nums: [-1, -100, 3, 99],
        //     k: 2,
        //   },
        //   expect: [3, 99, -1, -100]
        // },
    ].map(getAnswer)
    console.log('answers: ', answers);
})();

function getAnswer({ input: { nums, k } }) {
  // return's new array
  // if ([0, 1].includes(nums.length)) return nums;
  // const front = nums.slice(0, nums.length - k);
  // const back = nums.slice(-k);
  // return back.concat(front);
  
  // literally rotating
  while(k-- > 0) {
    const last = nums.pop()
    nums.unshift(last)
  }
}
