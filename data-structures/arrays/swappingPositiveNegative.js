/**
  @function CardinalSort
    Re-arrange the results in the array, such that all negatives are on one side,
    and all positives are on the other side.

    Objectives:
    [x] Psuedo Code
    [x] Code
    [ ] WhiteBoard
    [ ] Analysis

  define i & j
  loop across array
    if (i) is positive
      if (j) is negative
        swap
      else
        decrement j until it finds a negative number
        swap
      if (j) is negative
        if (i) is positive
          swap
        else
          increment i until it finds a positive number
          swap
*/


(() => {
  console.time('answer');
  const answers = [
    {
      A: [-6, 3, -8, 10, 5, -7, -9, 12, -4, 2],
    }
  ].map(swapPositiveNegative);
  console.timeEnd('answer');
  console.log(answers[0]);
})();

function swapPositiveNegative({ A }) {
  let i = 0;
  let j = A.length - 1;

  let swap = () => [A[j], A[i]] = [A[i], A[j]];

  // for (;i < j; i++, j--) {
  //   if (A[i] > 0) {
  //     if (A[j] < 0) swap()
  //     else {
  //       while (A[++j] > 0);
  //       swap();
  //     }
  //   }
  //   if (A[j] < 0) {
  //     if (A[i] > 0) swap();
  //     else {
  //       while(A[++i] < 0);
  //       swap();
  //     }
  //   }
  // }

  while(i < j) {
    while(A[i] < 0) i++;
    while(A[j] >= 0) j--;
    if (i < j) {
      swap();
    }
  }
  return A;
}
