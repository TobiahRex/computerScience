/**
  @function MergingArrays

*/


(() => {
  console.time('answer');
  const answers = [
    {
      A: [0,1,3,5,7,9],
      B: [2,4,6],
    }
  ].map(mergeArrays);
  console.timeEnd('answer');
  console.log('answers: ', answers.join('\n'));
})();
/**
  mergeArrays

  track:
  i - A counter
  j - B counter
  m - merged Array
  mL - minLength

  while i & j are less than the mL
    if A's val <= B's val
      add A's val to merged Arr
    if A's val >= B's val
      add B's val to merged Arr
  while i < A's length:
    add As values to merged Arr
  while j < B's length:
    add Bs values to merged Arr
*/
function mergeArrays({ A, B }) {
  let i = 0, j = 0, m = [];

  while(i < A.length && j < B.length) {
    if (A[i] <= B[j]) m.push(A[i++]);
    if (A[i] >= B[j]) m.push(B[j++]);
  }
  while(i < A.length) m.push(A[i++]);
  while(j < B.length) m.push(B[j++]);

  return m;
}
// Time Complexity = Theta(A + B)