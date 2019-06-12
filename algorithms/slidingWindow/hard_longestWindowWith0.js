(() => {
  const answers = [
    {
      arr: [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1],
      k: 2,
    },
    {
      arr: [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1],
      k: 3,
    },
  ].map((input) => getAnswer(input));

  console.log('answers: ', answers);
})();

function getAnswer({ arr, k }) {
  let ones = max = start = end = 0;

  while(end < arr.length) {
    if (arr[end] === 1) ones += 1;
    if ((end - start + 1) - ones > k) {
      if (arr[start++] === 1) ones -= 1;
    }
    max = Math.max(max, end - start + 1);
    end += 1;
  }
  return max;
}
