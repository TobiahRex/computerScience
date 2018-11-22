// Write a function that returns the first pair of numbers (array format) whose sum equals zero.
// If not such result exists, return 'undefined'.
let partitions = 1;
const partition = (array, lo, hi) => {
  // console.log('Partition Call #', ++partitions);
  if (lo > hi || lo === hi) return;
  const sum = array[lo] + array[hi];

  if (sum) {
    return partition(array, lo, hi - 1);
    return partition(array, lo + 1, hi);
  } else {
    // console.log('sum: ', array[lo] + array[hi], '\nlo: ', lo, '| hi: ', hi);
    return ([array[lo], array[hi]]);
  }
}

const sumZero = (nums) => partition(nums, 0, nums.length - 1);

console.log("Sum Zero I: ",
// console.time('sumZero');
  sumZero(
    [-3, -2, -1, 0, 1, 2, 3]
    // [0, -1, 1, 2, 3, -3, -2]
    // [4, -4, 0, -1, 2, 3, -3, -2, 1]
  )
// console.timeEnd('sumZero');
)

const sumZeroII = (array) => {
  let i = 0,
    j = array.length - 1;

  for (; i < array.lenth - 1; i++, j--) {
    const sum = array[i] + array[j];

    if (!sum) return [array[i], array[j]];
  }

  return undefined;
}
console.time('sumZeroII');
console.log(
  "Sum Zero II: ",
  sumZeroII(
    // [-3, -2, -1, 0, 1, 2, 3]
    [4, -4, 0, -1, 2, 3, -3, -2, 1]
  )
);
console.timeEnd('sumZeroII');

// Solution Notes:
// An O(n) solution depends on a sorted array.
// If the array is Unsorted, at best, the solution becomes,
// Sorting Order time + Solution Order time.
// Best case scenario = O(n + NlogN) ~ O(NLogN);
