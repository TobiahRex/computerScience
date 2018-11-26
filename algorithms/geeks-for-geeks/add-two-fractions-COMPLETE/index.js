const processData = (inputs) => inputs.split('\n').forEach((n, i) => i > 0 && console.log(addFractions(n)));

function addFractions(inputStr) {
  // find which number has the largest denominator.
  // multiple the other numbers numberator by the divisor.
  let inputs = inputStr.split(' ').map((n) => parseInt(n))
      gcdResult = gcd(inputs[1], inputs[3]),
      lcmResult = (inputs[1] * inputs[3]) / gcdResult,
      commDenom = 0;

  if (gcdResult === 1) commDenom = lcmResult;
  else commDenom = gcdResult;

  let newN1 = inputs[0] * (commDenom / inputs[1]),
      newN2 = inputs[2] * (commDenom / inputs[3]),
      nx = newN1 + newN2;

  return `${nx}/${commDenom}`;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

processData(
`2
7 10 8 20
9 5 3 2`
)
// 22/20
