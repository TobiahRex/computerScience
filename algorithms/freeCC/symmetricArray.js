(() => {
  const answers = [
    [[1, 2, 3], [5, 2, 1, 4]], // 3, 4, 5
    [[1, 2, 5], [2, 3, 5], [3, 4, 5]], // 1 4 5
    [[3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]],  // 2, 3, 4, 6, 7
  ].map(getAnswer)
  console.log('answers: ', answers);
})();

function getAnswer(args) {
  let answer = [];
  let aMemo;
  args.forEach((arr, i) => {
    if (i === 0) {
      aMemo = useMemo(arr);
    } else {
      const bMemo = useMemo(arr);
      answer = extractResults(aMemo, bMemo);
    }
  });

  return answer;
}

function useMemo(setA, memo = {}) {
  return setA.reduce((acc, val) => {
    if (!Reflect.has(acc, val)) acc[val] = true;
    return acc;
  }, memo);
}

function extractResults(globalMemo, currMemo) {
  Object.keys(currMemo).forEach((k) => {
    if (!Reflect.has(globalMemo, k)) {
      globalMemo[k] = true;
    } else {
      delete globalMemo[k];
    }
  });

  return Object.keys(globalMemo);
}

/*
  Problem Description:
  Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

  Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). The resulting array must contain only unique values (no duplicates).

  Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/
