printCombination(['B1', 'B2', 'G1', 'G2', 'O1'], 6);

function printCombination(arr, limit) {
  const data = new Array

  let startIx = 0;
  let currIx = 0;
  combinationUtil(arr, data, startIx, arr.length - 1, currIx, limit);
}

function combinationUtil(arr, data, startIx, endIx, currIx, limit) {
  if (currIx === limit) return;
  let i = startIx;
  while (i <= endIx && (limit - currIx) >= (endIx - i + 1)) {
    data[currIx] = arr[i];
    combinationUtil(arr, data, i + 1, endIx, currIx + 1, limit);
    console.log(data.slice(0, currIx + 1));
    i++;
  }
}