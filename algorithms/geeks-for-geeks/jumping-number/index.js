const processData = (numbersStr) => numbersStr.split('').forEach((n, i) => i > 0 && jumpingNumber(n));

const increaseNum = (num) => {
  if ((num + 1) !== 10) return ({
    tooLarge: false,
    oldValue: num,
    newValue: num += 1,
  });
  return ({
    tooLarge: true,
    oldValue: num,
    newValue: num,
  });
}
function jumpingNumber(numberStr) {
  const digits = new Array(numberStr.length).fill(0);
  let targetNum = Number(numberStr),
    keepAdding = true;

  while(keepAdding) {
    increaseDigits(digits, digits.length - 1);
    if (sum > targetNum) keepAdding = false;
  }
}

function increaseNum(digitsRef) {

}

processData(
`4
10
50
950
250`
);
