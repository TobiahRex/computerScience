const processInput = (input) => {
  input.split('\n').forEach((n, i) => i > 0 && main(n));
}

function main(input) {
  let a, b, k;
  input.split(' ').forEach((n, i) => {
    if (i == 0) a = Number(n);
    if (i == 1) b = Number(n);
    if (i == 2) k = Number(n);
  });
  let sumStr = String(Math.pow(a, b)).split('');
  console.log(sumStr[sumStr.length - k]);
};

processInput(
`3
2 8 1
5 2 2
2 12 4`
)
