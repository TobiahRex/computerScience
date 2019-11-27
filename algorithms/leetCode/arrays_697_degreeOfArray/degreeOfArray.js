(() => {
  const answers = [
    [1, 2, 2, 3, 1, 1]
  ].map(getAnswer)
  console.log('answers: ', answers);
})();

function getAnswer(input) {
  const memo = input.reduce((acc, n) => {
    if (!Reflect.has(acc, n)) acc[n] = 1;
    else acc[n] += 1;
    return acc;
  }, {});
  const degree = Object.values(memo).reduce((a, b) => Math.max(a, b));
  return degree;
}

/*
  Problem Description:
  Given a non-empty array of non-negative integers nums, the degree of this
  array is defined as the maximum frequency of any one of its elements.

  Your task is to find the smallest possible length of a (contiguous) subarray of
  nums, that has the same degree as nums.
*/
