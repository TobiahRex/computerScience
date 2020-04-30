/**
  @function findingDuplicatesInArray
  Find all duplicates in an array
*/


(() => {
  console.time('answer');
  const answers = [
    {
      A: [3,6,8,8,10,12,15,15,15,20],
    }
  ].map(getAnswer);
  console.timeEnd('answer');
  console.log('answers: ', answers.join('\n'));
})();

function getAnswer({ A }) {
  let dupes = [];
  let i = 1;
  while(i < A.length) {
    let isDupe = () => A[i] === A[i - 1];
    if (isDupe()) {
      dupes.push(A[i]);
      while(isDupe()) i++;
    }
    i++
  }
  return dupes;
}
