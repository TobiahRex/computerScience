function solveKnapsack(profits, weights, capacity) {
  const dp = [];

  function knapsackRecursive(profits, weights, capacity, currentIndex) {
    if (capacity <= 0 || currentIndex >= profits.length) return 0;

    dp[currentIndex] = dp[currentIndex] || [];

    if (typeof dp[currentIndex][capacity] !== 'undefined') { // if we already calculated this value - return the value
      return dp[currentIndex][capacity];
    }

    let profit1 = 0;

    if (weights[currentIndex] <= capacity) {
      profit1 = profits[currentIndex] +
        knapsackRecursive(profits, weights, capacity - weights[currentIndex], currentIndex + 1);
    }
  }
}
