/**
 Write a function bestSum(targetSum, numbers) that takes in a targetSum and an array of numbers as args.

 The function should return an array containing the shortest combination of numbers that add up to exactly the target sum.

 If there is a tie for the shortest combination, you may return any one of the shortest.
*/
/**
 * @function bestSum
 * Keeps a memo that match target[key] to the smallest sum mapping to their value [values].
 * @param
 * @return
 */
function bestSum(target, nums, memo = {}) {
  if (target in memo) return memo[target];
  if (target < 0) return null;
  if (target === 0) return [];
  memo[target] = [];
  for (let num of nums) {
    const nextTarget = target - num;
    const result = bestSum(nextTarget, nums, memo);
    if (result && result.length === 0) {
      memo[target] = [num];
      return memo[target];
    } else if (result && result.length) {
      const newResult = result.concat(num);
      if (!memo[target].length) {
        memo[target] = newResult;
      } else if (newResult.length < memo[target].length) {
        memo[target] = newResult;
      }
    }
  }
  if (memo[target].length) return memo[target];
  memo[target] = null;
  return null;
}
console.log(bestSum(10, [1,2,5]));