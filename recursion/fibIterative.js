// ITERATIVE
function fib(n) {
  let previous = 1;
  let current = 0;
  let next = 0;
  let i = n;

  while(i--){
    next = previous + current;
    previous = current;
    current = next;
  }

  if (n > 0) return current;
  return 0;
}

console.log('>>> ANSWER: ', fib(21)); // 21st = 10946
