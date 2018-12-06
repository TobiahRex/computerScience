(() => {
  let input = [3,3,2,1,3,4,4,4];
  let answer = equalizeArray(input);
  answer
})();

// {
//   3: {
//     count: 3,
//     index: [0, 1, 3],
//   },
//   2: {
//     count: 1,
//     index: [2]
//   },
//   1: {
//     count: 1,
//     index: [3]
//   },
// }


function equalizeArray(arr) {
  let maxStack = [], max = 0, memo = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in memo) {
      memo[arr[i]].count += 1;
      memo[arr[i]].index.push(i);
      if (memo[arr[i]].count == max) {
        maxStack.push(memo[arr[i]]);
      } else if (memo[arr[i]].count > max) {
        max = memo[arr[i]].count;
        maxStack = [memo[arr[i]]];
      }
    } else {
      memo[arr[i]] = {
        count: 1,
        index: [i]
      };
    }
  }
  maxStack
  let saveLength = 0;
  maxStack.forEach((obj) => {
    saveLength += obj.index.length;
  });
  return arr.length - saveLength;
}
