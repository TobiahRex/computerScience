/* NOTE:
  Find's the n'th Fibonnaci digit iteratively.
*/
function fib(n) {
  let previous = 1,
      current = 0,
      next = 0,
      i = n;

  while(i--){
    next = previous + current;
    previous = current;
    current = next;
  }
  return (n === 0 ? 0 : current);
}

console.log('>>> ANSWER: ', fib(21)); // 21st = 10946

/* NOTE:
- The most important aspect here is to SAVE the last iterations current and previous BEFORE re-assiging their values.  We save those values as a SUM and assign that SUM to "next".  Then we re-assign current & previous.
*/
