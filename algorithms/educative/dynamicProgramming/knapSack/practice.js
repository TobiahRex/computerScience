function solveKnapsack(profits, weights, capacity, currentIndex = 0, dp = {}) {
  if (capacity <= 0 || currentIndex >= profits.length) return 0;

  const dpId = `${currentIndex}-${capacity}`;
  if (Reflect.has(dp, dpId)) return dp[dpId];

  let profit1 = 0;
  if (weights[currentIndex] <= capacity) {
    profit1 = profits[currentIndex]
      + solveKnapsack(
        profits,
        weights,
        capacity - weights[currentIndex],
        currentIndex + 1
      );
  }

  const profit2 = solveKnapsack(profits, weights, capacity, currentIndex + 1);

  dp[dpId] = Math.max(profit1, profit2);
  dp
  return dp[dpId];
}

const profits = [1, 6, 10, 16];
const weights = [1, 2, 3, 5];

console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);
// console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);
