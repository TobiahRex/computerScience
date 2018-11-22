// Write a function that returns the first pair of numbers (array format) whose sum equals zero.
// If not such result exists, return 'undefined'.
const partition = (array, lo, hi) => {
  if (lo > hi || lo === hi) return undefined;
  const sum = array[lo] + array[hi];

  if (sum) {
    partition(array, lo + 1, hi);
    partition(array, lo, hi - 1);
  } else {
    return ([array[lo], array[hi]]);
  }
}

const sumZero = (nums) => partition(nums, 0, nums.length - 1);

console.log("Sum Zero I: ",
  sumZero(
    [-3, -2, -1, 0, 1, 2]
  )
)

const sumZeroII = (array) => {
  let i = 0,
    j = array.length - 1;

  for (; i < array.length; i++, j--) {
    const sum = array[i] + array[j];

    if (!sum) return [array[i], array[j]];
  }

  return undefined;
}

console.log(
  "Sum Zero II: ",
  sumZeroII(
    [-3, -2, -1, 0, 1, 2, 3]
  )
);
