/*
  Problem Description:
	Given three integer arrays arr1, arr2 and arr3 sorted in strictly increasing order, return a sorted array of only the integers that appeared in all three arrays.



	Example 1:

	Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]
	Output: [1,5]
	Explanation: Only 1 and 5 appeared in the three arrays.


	Results:
	Runtime: 52 ms, faster than 98.27% of JavaScript online submissions for Intersection of Three Sorted Arrays.
	Memory Usage: 35.9 MB, less than 100.00% of JavaScript online submissions for Intersection of Three Sorted Arrays.

	Time Taken: 7 Minutes
*/


(() => {
    const answers = [
        {
					arr1: [1, 2, 3, 4, 5],
					arr2: [1, 2, 5, 7, 9],
					arr3: [1, 3, 4, 5, 8],
        }
    ].map(arraysIntersection)
    console.log('answers: ', answers);
})();

function arraysIntersection({ arr1, arr2, arr3 }) {
	let s2 = new Set(arr2);
	let s3 = new Set(arr3);
	return arr1
		.filter((n) => s2.has(n))
		.filter((n) => s3.has(n))
}

