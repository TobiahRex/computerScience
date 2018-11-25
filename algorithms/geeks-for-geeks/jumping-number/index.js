const processData = (numbersStr) => numbersStr.split('\n').forEach((n, i) => i > 0 && jumpingNumber(n));

function jumpingNumber(numberStr) {
  let answerSequence = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (Number(numberStr) <= 10) {
    let answer = answerSequence.slice(0, numberStr - 1);
    while(answer.length) {
      console.log("input: ", numberStr, "| answer: ", answer.splice(0, 10));
    }
    return;
  }

  const numsArr = new Array(numberStr.length).fill(0);
  numsArr[numsArr.length - 2] = 1;
  let targetNum = parseInt(numberStr),
    keepAdding = true,
    currentNum = numsArr.length - 1;

  while(keepAdding) {
    if (numsArr[currentNum] <= numsArr[currentNum - 1]) {
      increaseNum(numsArr, currentNum);
    } else {
      decreaseNum(numsArr, currentNum);
      increaseNum(numsArr, currentNum - 1);
    }
    let newNum = verifyNewNum(numsArr);
    if (newNum && newNum > targetNum) keepAdding = false;
    else if (newNum) answerSequence.push(newNum)
  }
  console.log('input: ', numberStr, ' | answer: ');
  while(answerSequence.length) {
    console.log(answerSequence.splice(0, 10));
  }
  return;
}
function decreaseNum(numsArr, index) {
    numsArr[index] -= 1;
}

function increaseNum(numsArr, index) {
  let currentNum = numsArr[index];
  let temp = currentNum + 1;
  if (temp === 10) {
    numsArr[index] = 0;
    increaseNum(numsArr, index - 1);
  } else {
    numsArr[index] = temp;
  }
}

function verifyNewNum(numsArr) {
  let firstZero = false,
    numSequence = '';
  for (let i = 0; i < numsArr.length; i++) {
    if (!firstZero && numsArr[i]) {
      firstZero = true;
      numSequence += numsArr[i].toString();
    } else if (firstZero) {
      numSequence += numsArr[i].toString();
    }
  }

  let goodSeq = true;
  for (let i = 1; i < numSequence.length; i++) {
    if (Math.abs(numSequence[i] - numSequence[i - 1]) != 1) goodSeq = false;
  }
  return (goodSeq ? Number(numSequence) : 0);
}

processData(
`4
10
50
950
250`
);
