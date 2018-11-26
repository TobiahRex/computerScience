const processData = (inputs) => inputs.split('\n').forEach((n, i) => i > 0 && console.log(addFractions(n)));

function addFractions(inputStr) {
  // find which number has the largest denominator.
  // multiple the other numbers numberator by the divisor.
  let inputs = inputStr.split(' ').map((n) => parseInt(n));
  let commDenom = lcm(inputs[1], inputs[3]);
  let newN1 = inputs[0] * (commDenom / inputs[1]);
  let newN2 = inputs[0] * (commDenom / inputs[1]);
  let nx = newN1 + newN2;
  return `${nx}/${commDenom}`;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}
