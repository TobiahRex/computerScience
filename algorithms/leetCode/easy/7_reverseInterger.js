/*
  Problem Description:
    Given a 32-bit signed integer, reverse digits of an integer.

    Example 1:

    Input: 123
    Output: 321
    Example 2:

    Input: -123
    Output: -321
    Example 3:

    Input: 120
    Output: 21
    Note:
    Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

    Solutions:
    A) Number -> String -> Number
      1. Stringify
      2. split
      3. Math.pow on index * 10
      4. Reduce values together.

    B) Number Theory
      1 is a symbol of 1 container | container #1 has only 1/10
      21 is a symbol fo 2 containers | container #1 has 1/10 | container #2 has 10/10
      321 is a symbol fo 3 containers | container #1 has 1/10 | container #2 has 10/10 | container #3 has 10/10

      const num = 123

      Math.floor((num % 10) / 1) = 3
      Math.floor((num % 100) / 10) = 2
      Math.floor((num % 1000) / 100) = 1
*/


(() => {
  const answers = [
    {
      x: 123,
      expect: 321,
    },
    {
      x: -123,
      expect: -321,
    },
    {
      x: 120,
      expect: 21,
    }
  ].map(getAnswer)
  console.log('answers: ', answers);
})();

function getAnswer({ x }) {
  const isNegative = x < 0;
  const target = Math.abs(x);
  const upperBound = Math.pow(2, 31);
  const lowerBound = Math.pow(2, 31) - 1;

  let sum = 0;
  let mod = 10;
  let divisor = 1;
  for (let i = Math.ceil(Math.log10(target + 1)) - 1; i >= 0; i--) {
    const digit = Math.floor(((target) % mod) / divisor);             // extract ith digit
    const multiplier = Math.pow(10, i);                               // calc base 10 multipler for extracted digit
    sum += digit * multiplier;                                        // scale digit by muliplier and add to total

    if (isNegative && sum > upperBound || !isNegative && sum > lowerBound) {
        sum = 0;
        break;
    }

    // increment respective operators.
    mod *= 10;
    divisor *= 10;
  }

  return isNegative ? sum * -1 : sum; // return output
}
