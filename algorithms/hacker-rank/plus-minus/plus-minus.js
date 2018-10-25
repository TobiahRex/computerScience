const plusMinus = (arr) => {
  const memo = arr.reduce((acc, n) => {
    if (n > 0) acc.positive += 1;
    if (n < 0) acc.negative += 1;
    if (n === 0) acc.zero += 1;
    return acc;
  }, {
    positive: 0,
    negative: 0,
    zero: 0
  });

  console.log((memo.positive / arr.length).toFixed(6));
  console.log((memo.negative / arr.length).toFixed(6));
  console.log((memo.zero / arr.length).toFixed(6));
}

plusMinus([-4,3,-9,0,4,1]);
