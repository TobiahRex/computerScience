(() => {
  let input = [3,3,2,1,3];
  equalizeArray(input);
})();

{
  3: {
    count: 3,
    index: [0, 1, 3],
  },
  2: {
    count: 1,
    index: [2]
  },
  1: {
    count: 1,
    index: [3]
  },
}

let maxStack = [];

function equalizeArray(arr) {
  let memo = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in memo) {
      memo[arr[i]].count += 1;
      memo[arr[i]].index.push(i);
      if (memo[arr[i]].count >= maxStack) {
        maxStack.push(arr[i]);
      }
    } else {
      memo[arra[i]] = {
        count: 1,
        index: [i]
      };
    }
  }
  let saveLength = 0;
  maxStack.forEach((val) => {
    saveLength += memo[]
  })
}
