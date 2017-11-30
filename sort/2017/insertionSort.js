/*
INSERTION SORT
*** Description
Iterate over array and grow a sorted array behind current element.
For each position, compare value of element with previous elements and swap positions if previous element is larger.
example:
[ 3 4 5|1 2 6 ]
 sorted|unsorted
swaps:
[ 3 4 1 5|2 6 ]
[ 3 1 4 5|2 6 ]
[ 1 3 4 5|2 6 ]
now repeat for next unsorted element
*** Exercises
- Implement insertion sort for array of numbers
- Identify time complexity
- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]
*** Extra credit
- Implement shell sort, a generalization of insertion sort
(https://en.wikipedia.org/wiki/Shellsort)
*/

const insertionSort = (arr) => {
  const sorted = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    const n = arr[i];
    if (n > sorted[sorted.length - 1]) sorted.push(n);
    else {
      for (let j = 0; j < sorted.length; j++) {
        if (n < sorted[j]) {
          sorted.splice(j, 0, n);
          break;
        } else if (n > sorted[j] && n < sorted[j + 1]){
          sorted.splice(j + 1, 0, n);
          break;
        }
      }
    }
  }
  return sorted;
}
console.log(insertionSort([
  18, 11, 19, 12, 13, 14, 15, 16, 7, 5, 3, 17, 1, 9, 10, 8, 6, 20, 4, 2,
]));
