const electronicsShop = (inputs, k, d) => {
  let budget = inputs[0]; answer = 0;
  for (let i = 0; i < inputs[1]; i++) {
    for (let j = 0; j < inputs[2]; j++) {
      let currentSum = k[i] + d[j];
      if (currentSum > answer && currentSum <= budget)  {
        answer = currentSum;
      }
    }
  }

  return answer;
};

console.log(electronicsShop(
  [10, 2, 3],
  [3, 1],
  [5, 2, 8],
))
