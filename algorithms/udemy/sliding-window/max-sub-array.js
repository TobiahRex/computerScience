// find a sub array who has the largest sum. The length of the sub array is given.
const maxSubArraySum = (arr = [1, 2, 5, 2, 8, 1, 5], length = 4) => {
  if (!arr.length || arr.length < length) return null;
  let i = 0,
    j = length - 1,
    sum = 0;

  for (; j < arr.length; j++, i++) {
    let currentSum = arr.slice(i, j + 1).reduce((a, b) => a + b);
    sum = currentSum > sum ? currentSum : sum;
  }
  return sum;
}

// console.log(maxSubArraySum());
console.log(maxSubArraySum([2, 3, 4, 3, 0], 2));
