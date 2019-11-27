(() => {
  const answers = [
    {
      list: [2, 1, 5, 1, 3, 2],
      k: 3,
    },
    {
      list: [2, 3, 4, 1, 5],
      k: 2,
    }
  ].map(getAnswer)
  console.log('answers: ', answers);
})();

function getAnswer({ list, k }) {
  let wStart = wEnd = max = currentSum = 0;

  while(wEnd < list.length) {
    currentSum += list[wEnd] /*?*/

    if ((wEnd - wStart + 1) === k) {
      max = Math.max(max, currentSum);
      currentSum -= list[wStart++];
    }

    wEnd++;
  }

  return max;
}
