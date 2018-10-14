const electronicsShop = (inputs, k, d) => {
  let answer = 0, kMemo = {}, dMemo = {}, budget = inputs[0];
  findCombos(k, 0, k.length, kMemo);
  findCombos(d, 0, d.length, dMemo);

  Object.keys(kMemo).forEach((k) => {
    let kSum = Number(k);
    Object.keys(dMemo).forEach((dSum) => {
      let currentSum = kSum + Number(dSum);
      if (currentSum > answer && currentSum <= budget) {
        answer = currentSum;
      }
    });
  });

  Object.keys(dMemo).forEach((d) => {
    let dSum = Number(d);
    Object.keys(kMemo).forEach((kSum) => {
      let currentSum = dSum + Number(kSum);
      if (currentSum > answer && currentSum <= budget) {
        answer = currentSum;
      }
    });
  });
  console.log('answer: ', answer);

  return answer;
}

function findCombos(arr, start, end, memo) {
  if (start > arr.length || end < 0) return memo;

  let newSum = arr.slice(start, end).reduce((a, b) => a + b, 0);
  if (!(newSum in memo) && newSum > 0) {
    memo[newSum] = newSum;
  }

  findCombos(arr, start + 1, end, memo);
  findCombos(arr, start, end - 1, memo);
}

console.log(electronicsShop(
  [10, 2, 3],
  [3, 1],
  [5, 2, 8],
))
