let BigOh = 0;
(() => {
  const answers = [{
      arr: [6, 7, 5, 4, 3, 8],
      size: 3,
    },
    // {
    //   arr: [2, 1, 5, 2, 8],
    //   size: 3,
    // },
    // {
    //   arr: [3, 4, 1, 1, 6],
    //   size: 3,
  ].map((input) => largestArr(input.arr, input.size));

  console.log('answers: ', answers);
})();

function largestArr(arr, k) {
  let results = [],
    windowStart = 0,
    windowEnd = 0,
    max = 0;

    while(windowEnd < arr.length) {
      if ((windowEnd - windowStart + 1) === 3) {
        max = Math.max(max, arr[windowEnd]);
        results.push(max);
        windowEnd += 1;
        windowStart += 1;
      } else {
        windowEnd += 1;
        max = Math.max(max, arr[windowEnd]);
      }
    }
    return results;
}
