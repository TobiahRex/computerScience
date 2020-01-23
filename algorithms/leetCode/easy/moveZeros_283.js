/**
 * NOTE:
  Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

  Example:

  Input: [0,1,0,3,12]
  Output: [1,3,12,0,0]
  Note:

  You must do this in-place without making a copy of the array.
  Minimize the total number of operations.
 */

(() => {
  const answers = [
    {
      nums: [2,2,1,3,0,12],
    }
  ].map(getAnswer)
  console.log('answers: ', answers);
})();

function getAnswer({ nums }) {
    let firstZeroIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[firstZeroIndex], nums[i]] = [nums[i], nums[firstZeroIndex]];
            firstZeroIndex++;
        }
    }

  return nums;
}


// function getAnswer({ nums }) {
//   const zeros = nums.map((n, i) => n === 0 ? i : -1);
//   let edits = 0;
//   for (let i = 0; i < nums.length; i += 1) {
//     if (zeros[i] > -1) {
//       nums.splice(i - edits++, 1);
//       nums.push(0);
//     }
//   }
//
//   return nums;
// }

const x = [1, 2];
[x[0], x[1]] = [x[1], x[0]]
x
