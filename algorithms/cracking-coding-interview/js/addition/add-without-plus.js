

const binaryAddition = (a, b) => {
  if (b === 0) return a;
  let sum = a ^ b,                    // 2, 8, 12
    carry = (a & b) << 1;             // 10, 4, 0

  return binaryAddition(sum, carry);
}

console.log(binaryAddition(5, 7));
