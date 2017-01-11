function tribonacci(s,n){
  if (!(n > 3)) return s.slice(0, n);
  n -= 3;
  while (n--) {
    let answer = s[s.length - 1] + s[s.length - 2] + s[s.length - 3];
    s.push(answer);
  }
  return s;
}

/* Test Case
 signature = [1,1,1]
 n = 10
 result = [1,1,1,3,5,9,17,31,57,105]
*/
const test_sig = [1,1,1];
const test_n = 5;
console.log(tribonacci(test_sig, test_n));
