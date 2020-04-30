/**
  @function findMissingMultipleElementsUnsorted
  Find all missing elements in an unsorted array
*/


(() => {
  console.time('answer');
  const answers = [
    {
      A: [3,7,4,9,12,6,1,11,2,10]
    }
  ].map(getAnswer);
  console.timeEnd('answer');
  console.log('answers: ', answers.join('\n'));
})();

function getAnswer({ A }) {
  let H = new Array(A.length).fill(0);
  for (let i = 0; i < A.length; i++) {
    H[A[i]] = 1
  }
  let missing = [];
  for (let j = 1; j < H.length; j++) {
    if (H[j] === 0) {
      missing.push(j);
    }
  }
  return missing;
}
