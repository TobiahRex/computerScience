/**
  @function findDuplicatesInArray_flagArr

*/


(() => {
  console.time('answer');
  const answers = [
    {
      A: [3, 6, 8, 8, 10, 12, 15, 15, 15, 20],
    }
  ].map(getAnswer);
  console.timeEnd('answer');
  console.log('answers: ', answers.join('\n'));
})();

function getAnswer({ A }) {
  let D = new Map();
  for (let i = 0; i < A.length; i++) {
    D.set(A[i], D.has(A[i]) ? D.get(A[i]) + 1 : 1);
  }
  const d = [...D].reduce((acc, [k,v]) => {
    if (v > 1) acc.push(k);
    return acc;
  }, []);
  return d;
}
