const binaryAddition = (a, b) => {
  if (b === 0) return a;
  let sum = a ^ b;
  let carry = (a & b) << 1;
  return binaryAddition(sum, carry);
}

console.log(
  binaryAddition(
    6, 2
  )
)
