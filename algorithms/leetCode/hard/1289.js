(() => {
  const answers = [
    {
      arr: [
        [1,2,3],
        [4,5,6],
        [7,8,9]
      ],
    }
  ].map(MinimumFallingPathSumII)
  console.log('answers: ', answers);
})();

function MinimumFallingPathSumII({ arr }) {
  let answerMap = [];

  for (let row = 0; row < arr.length; row += 1) {
    let start = [];
    let alphaMin, betaMin;

    if (row === 0) {
      alphaMin = getMins(arr, row, true);
      betaMin = getMins(arr, row, false, alphaMin);
    } else {
      const summationArr = arr[row].map((n, i) => n + arr[row - 1][i]);
      alphaMin = getMins([summationArr], 0, true);
      betaMin = getMins([summationArr], 0, false, alphaMin);
    }

    const result = arr[row].map((x, i) => i === alphaMin.index ? alphaMin.value : betaMin.value);

    if (row === 0) arr[row] = result;
    result
    // else {
    //   arr[row - 1].map(() => )
    // }

    answerMap.push(result);
  }
  answerMap
}

/*
  Problem Description:
  Given a square grid of integers arr, a falling path with non-zero shifts is a choice of exactly one element from each row of arr, such that no two elements chosen in adjacent rows are in the same column.

  Return the minimum sum of a falling path with non-zero shifts.
*/

function getMins(arr, row, isAlpha, previousMin) {
  return arr[row].reduce((acc, n, i) => {
    let min;
    if (isAlpha) {
      min = Math.min(acc.value, n);
    } else {
      min = i !== previousMin.index ? Math.min(acc.value, n) : acc.value;
    }

    if (min !== acc.value) {
      acc.value = min;
      acc.index = i;
    }
    return acc;
  }, {
    value: Infinity,
    index: -1,
  });
}
