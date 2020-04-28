/**
  @function findMissingElement in a sorted array

*/


(() => {
  console.time('answer');
  const answers = [
    {
      A: [6,7,8,10,11,14,15],
    }
  ].map(getAnswer);
  console.timeEnd('answer');
  console.log('answers: ', answers.join('\n'));
})();

function getAnswer({ A }) {
  let lastDiff = A[0];
  let missing = [];
  for (let i = 1; i < A.length; i++) {
    let diff = A[i] - i;
    if (lastDiff !== diff) {
      while(lastDiff < diff) {
        missing.push(lastDiff + i);
        lastDiff++
      }
    }
  }
  return missing;
}
