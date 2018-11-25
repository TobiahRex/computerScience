const processData = (input) => {
  input.split('\n').forEach((n, i) => i > 0 && main(n));
}

function main(binaryStr) {
  let sum = 0;
  for (let i = binaryStr.length - 1, j = 0; i >= 0; i--, j++) {
    if (binaryStr[i] === '1') sum += Math.pow(2, j);
  }
  console.log('sum: ', sum);
}

processData(
`2
10001000
101100`
)
// 136
// 44
