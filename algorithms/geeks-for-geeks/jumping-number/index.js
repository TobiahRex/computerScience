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
    keepAdding = true,
    sum = 0;

  while(keepAdding) {
    increaseDigits(sum, digits);
    if (sum > targetNum) keepAdding = false;
  }
}

function increaseDigits(sumRef, digitsRef) {
  let increase = true, currentIndex = digitsRef.length - 1;

  while(increase) {
    smaller = getNextN(digitsRef[currentIndex]).newValue;
    bigger = getNextN(digitsRef[currentIndex - 1]).newValue;
    if (smaller === bigger) {
      smaller = getNextN(digitsRef[currentIndex]).newValue;
    }

    if (getNextN(digitsRef[currentIndex]).tooLarge) {
      currentIndex - 1;
      if ()
    } else {
      increase = false;
    }
  }
}

processData(
`4
10
50
950
250`
);
