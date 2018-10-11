const sockPairs = (pairs, arr) => {
  return Object
  .values(
    arr.reduce((acc, n) => {
    if (!(n in acc)) acc[n] = 1;
    else acc[n] += 1;
    return acc;
  }, {})
).reduce((answer, pairs) => {
    while(pairs > 1) {
      pairs -= 2;
      answer += 1;
    }
    return answer;
  }, 0);
}

console.log(sockPairs(9, [10,20,20,10,10,30,50,10,20]));
