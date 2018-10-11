const sockPairs = (pairs, arr) => {
  let answer = 0;

  const memo = arr.reduce((acc, n) => {
    if (!(n in acc)) acc[n] = 1;
    else acc[n] += 1;
  }, {});

  Object.keys(memo).forEach((key) => {
    let currentPairs = 0;
    while(memo[key] > 1) {
      memo[key] -= 2;
      currentPairs += 1;
    }
    answer += currentPairs;
  });

  return answer;
}

console.log(sockPairs(9, [10,20,20,10,10,30,50,10,20]));
