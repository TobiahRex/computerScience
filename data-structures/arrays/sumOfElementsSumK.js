/**
  @function findingSumOfElementsWithSumK
  Find a pair of elements that sum to K
*/


(() => {
  console.time('answer');
  const answers = [
    {
      A: [3,9,3,12,4,2,1,8,7,6,5,0],
      t: 15
    }
  ].map(getAnswer);
  console.timeEnd('answer');
  console.log('answers: ', answers.join('\n'));
})();

function getAnswer({ A, t }) {
  let m = new Map();
  for (let i = 0; i < A.length; i++) {
    if (m.has(A[i])) {
      let c = t - A[i];
      m.has(c) ? m.set(c, A[i]) : ;
    } else {
      m.set(A[i], undefined)
    }
  }

  return [...m].reduce((a, [k, v]) => {
    if (v) a.push(v);
    return a;
  }, []);
}
