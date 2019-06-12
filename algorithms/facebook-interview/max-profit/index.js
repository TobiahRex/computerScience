(() => {
  let prices = [20, 25, 45, 15, 35, 48, 10, 15];
  console.log(maxProfit(prices)); // expect 33 as the answer
})();

function maxProfit(p) {
  let profits = [],
    currentMin = Infinity,
    currentProfit = 0;

  for (let i = 0; i < p.length; i++) {
    if (p[i] < currentMin) {
      currentMin = p[i];
    } else if (p[i] > currentMin) {
      let tempProfit = p[i] - currentMin;
      if (tempProfit > currentProfit) currentProfit = tempProfit;
    }
  }

  return currentProfit;
}
