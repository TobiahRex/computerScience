/**
  @function reverseArray

  track:
  i - left flag
  j - right flag

  while i is not j
    swap A[i] & A[j]
*/


(() => {
  console.time('answer');
  const answers = [
    {
      A: [9,8,7,6,5,4,3,2,1,0]
    }
  ].map(reverseArray);
  console.timeEnd('answer');
  console.log('answers: ', answers.join('\n'));
})();

function reverseArray({ A }) {
  let i = 0, j = A.length - 1;
  while(i < j) [A[i++], A[j--]] = [A[j], A[i]];
  return A
}
