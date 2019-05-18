let BigOh = 0;
(() => {
  const answers = [
    {
      fruits: ['A', 'B', 'C', 'A', 'C']
    },
    {
      fruits: ['A', 'B', 'C', 'B', 'B', 'C']
    },
  ].map((input) => fruitIntoBasket(input.fruits));

  console.log('answers: ', answers);
})();

function fruitIntoBasket(fruits) {
  let maxLength = 0,
    windowStart = 0,
    windowEnd = 0,
    memo = {};

    while(windowEnd < fruits.length) {
      const thisFruit = fruits[windowEnd];
      if (!memo[thisFruit]) {
        memo[thisFruit] = 1;
      } else {
        memo[thisFruit] += 1;
      }

      while(Object.keys(memo).length > 2) {
        const badFruit = fruits[windowStart++];
        memo[badFruit] -= 1;
        if (!memo[badFruit]) delete memo[badFruit];
      }
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
      windowEnd += 1;
    }
    return maxLength;
}
/*
Problem Statement
Given an array of characters where each character represents a fruit tree,
you are given two baskets
and your goal is to put maximum number of fruits in each basket.

The only restriction is that
each basket can have only ONE type of fruit.

You can start with any tree,
but once you have started you can’t skip a tree.

You will pick one fruit from each tree until you cannot, i.e.,
you will stop when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both the baskets.
*/
