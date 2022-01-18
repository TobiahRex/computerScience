/**
 Write a function "howSum(targetSum, nums)" that takes in a targetSum and an array of nums.

 The function should return an array containing any combination of elements that add up to exactly the target sum.
 If ther is no combination that adds up to the targetSum, then return null.

 If there are multiple combnos, return any single one.
*/

/**
 * @function targetSum
 * Returns a sum of some elements (including repeated members of nums) if they add up to the target.
 * @param {number} target
 * @param {array{number}} nums
 * @return {null | array{number}}
 *
 * Time:
 * O(n*m)
 * Space:
 * O(m)
 */
function targetSum(target, nums, memo = {}) {
  if (target in memo) return memo[target];
  if (target < 0) return null;
  if (target === 0) return [];
  for (let num of nums) {
    const nextTarget = target - num;
    const result = targetSum(nextTarget, nums, memo);
    if (result) {
      result.push(num);
      return result;
    } else {
      memo[target] = null;
    }
  }
  return null;
}
console.log(targetSum(300, [21, 3]))

/**
 * @function targetSum
 * Returns a sum of some elements of nums if they add up to the target.
 * @param {number} target
 * @param {array{number}} nums
 * @return {null | array{number}}
 */
function targetSumLimited(target, nums) {
  if (target < 0) return null;
  if (target === 0) return [];
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    const [nextNum] = nums.splice(i, 1);
    const result = targetSum(target - nextNum, nums);
    if (result) {
      result.push(nextNum);
      return result;
    } else {
      nums.splice(i, 0, nextNum);
    }
  }
  return null;
}
// console.log(targetSumLimited(7, [2, 3, 4, 5]));

/**
 * @function targetSum1
 * Returns a sum of some elements of nums if they add up to the target.
 * @param {number} target
 * @param {array{number}} nums
 * @return {null | array{number}}
 *
 * NOTE: Creates copy of nums, and creates copy of answer (not efficient)
 *
 * Time:
 * m = target sum
 * n = nums.length
 * b = n^n-1
 * O(n-1^m * numsCopy * answerCopy)
 */
function targetSum1(target, nums, answer = []) {
  if (target < 0) return null;
  if (target === 0) return answer;
  for (let i = 0; i < nums.length; i++) {
    const nextNums = [...nums];
    const [nextNum] = nextNums.splice(i, 1);
    const nextAnswer = [...answer, nextNum];
    const result = targetSum(target - nextNum, nextNums, nextAnswer);
    if (result && result.length) {
      return result;
    }
  }
  return null;
}