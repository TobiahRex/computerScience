/* NOTE:
 Takes an Array "s", and a counter "n", returning an array of tribbonacci values.

 1. Checks for edge cases where "n" is less than 3.

 2. Subtract 3 from "n" to know how many iterations it should calculate an additional value for.

 3. While n is greater than 0...add the last three values of the "s" array and insert that number into the s array as an additional value.

 4. return s.
*/
function tribonacci(s,n){
  if (!(n > 3)) return s.slice(0, n);

  n -= 3;

  while (n--) {
    s.push(s.slice(s.length - 3).reduce((a, b) => a + b));
  }

  return s;
}

/* Test Case
 signature = [1,1,1]
 n = 10
 result = [1,1,1,3,5,9,17,31,57,105]
*/
const test_sig = [1,1,1];
const test_n = 2;
console.log(tribonacci(test_sig, test_n));
