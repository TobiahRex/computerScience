(() => {
  const answers = [
    {
      list: [2, 1, 5, 2, 3, 2],
      s: 7,
    },
    {
      list: [1,1,1],
      s: 7,
    },
    // {
    //   list: [3, 4, 1, 1, 6],
    //   s: 8,
    // }
  ].map(getAnswer)
  console.log('answers: ', answers);
})();

function getAnswer({ list, s }) {
  let maxSum = wStart = wEnd = currentSum = currentLength = 0;
  let minLength = Infinity;

  while(wEnd < list.length) {
    currentSum += list[wEnd];

    if (currentSum >= s) {
      while(currentSum >= s) {
        minLength = Math.min(minLength, (wEnd - wStart + 1));
        currentSum -= list[wStart++];
      }
    }

    wEnd++;
  }

  return (minLength === Infinity ? 0 : minLength);
}

/*
  Problem Description:

*/
