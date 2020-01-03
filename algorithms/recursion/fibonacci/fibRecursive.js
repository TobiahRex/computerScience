// function fib(n) {
//   /*
//     could count downwards with n.
//     could count up towards n.
//
//     start with fibonacci previous, current, next.
//     previous + next = current;
//     current start out at 0.
//     next start out as current + current.
//     previous starts out at 0, but is the sum of the previous two.
//
//     doing this recursively...
//
//     we would need to pass a counter to fibRecursive, and determined inside that functions base case, if we needed to calculate again.
//
//     base case.
//
//     if (n !== 0);
//
//     passing in a decremented counter each time.
//   */
//   const fibRecursive = (target, previous, current) => {
//     let sum = 0;
//     // if we need to call it again
//     if (target !== 0) {
//       // calculate the new total.
//       sum += (previous + current);
//       // pass in the previous total, with the new total, and call it again.
//       return fibRecursive(--target, current, sum);
//       // if we don't need to call again. (target === 0)
//     } else {
//       // then we can retun the total and be done.
//       return (current);
//     }
//   }
//
//   if (n > 0) return fibRecursive(--n, 0, 1);  // if n is a number, find answer.
//   return 0;
// }
//
// // RECURSIVE (mine)
// function fib(n) {
//   function fibRecursive(target, previous, current) {
//     if (target !== 0) {
//       return fibRecursive(--target, current, (previous + current));
//     }
//     return current;
//   }
//   if (n > 0) return fibRecursive(--n, 0, 1);
//   return 0;
// }
//
// // RECURSIVE (Michael)
function fib(n) {
  if (n < 1) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

// function fib(n) {
//   if (n > 1) {
//     return fib(n - 1) + fib(n - 2);
//   }
//   return n
// }

console.log('>>> ANSWER: ', fib(6)); // 21st = 10946
// [0,0,1,2,3,6,11,20] | n > 1
// [1,2,3,6,11,20] | n > 2
