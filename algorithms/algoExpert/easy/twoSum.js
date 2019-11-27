(() => {
  const answers = [
    {
      array: [3, 5, -4, 8, 11, 1, -1, 6],
      targetSum: 10,
    }
  ].map(getAnswer)
  console.log('answers: ', answers);
})();

function getAnswer({ array, targetSum }) {
  // Write your code here.
	const compMap = {}; // NOTE: Compliment Map

	for (let i = 0; i < array.length; i++) {
		if (Reflect.has(compMap, array[i])) {
			if (compMap[array[i]].type === 'compliment') {
				const answer = [array[i], compMap[array[i]].pair];
				return array[i] > compMap[array[i]].pair ? answer.reverse() : answer;
			}
		} else {
			compMap[array[i]] = {
				type: 'root',
				pair: targetSum - array[i],
			}
			compMap[targetSum - array[i]] = {
				type: 'compliment',
				pair: array[i],
			}
		}
	}

  return [];
}

/*
  Problem Description:
  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. If any two numbers in the input array sum
  up to the target sum, the function should return them in an array, in sorted
  order. If no two numbers sum up to the target sum, the function should return
  an empty array. Assume that there will be at most one pair of numbers summing
  up to the target sum.

  Sample input: [3, 5, -4, 8, 11, 1, -1, 6], 10
  Sample Output: [-1, 11]
*/
