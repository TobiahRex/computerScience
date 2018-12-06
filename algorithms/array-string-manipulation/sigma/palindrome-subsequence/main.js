(() => {
  let string =
    'tobybobtoby'
    // 'axbawbaseksqke'
    // 'acdapmpomp'
  console.log(getScore(string));
})();

function getScore(str) {
  // Write your code here
  let len = str.length, matrix = [];
  for (let i = 0; i < str.length; i++) {
    matrix[i] = new Array(len).fill(0);
    matrix[i][i] = 1;
  }
  // create a sliding-window
  // dynamically grow the size of the window
  for (let sWindow = 2; sWindow <= len; sWindow++) {
    // for each sWindow,
    // compare the left and right-bound values of the sWindow
    for (let i = 0, j = 0; i < (len - sWindow + 1); i++) {  // +1 due to the right-bound of the sWindow
      // calculate the right-bound index value
      j = (i + sWindow) - 1  // the current left-bound value + the sWindow size, minus 1 for 0-based index.
      if (str[i] === str[j] && sWindow === 2) { // if the very first 2 values are equal, incrememnt by 1 instead of the normal 2
        matrix[i][j] = 2;
      } else if (str[i] === str[j]) { // assign as sum of bottom-left diagonal value and 2
        matrix[i][j] = matrix[i + 1][j - 1] + 2;
      } else { // else, take the larger of the bottom or left value.
        matrix[i][j] = Math.max(matrix[i + 1][j], matrix[i][j - 1]);
      }
    }
  }
  // return (matrix[0][len - 1] * matrix[0][len - 2]);
  let finalProduct = 0;
  for (let i = 0; i < str.length - 1; i++) {
    let currentProduct = matrix[0][i] * matrix[i + 1][str.length - 1];
    currentProduct
    if (currentProduct > finalProduct) {
      finalProduct = currentProduct;
    }
  }
  return finalProduct;
}

function answer(str) {
  let finalProduct = -1;
  let matrix = palindromicSubsequence(str);
  console.log(matrix);
  for (let i = 0; i < str.length - 1; i++) {
    let currentProduct = matrix[0][i] * matrix[i + 1][str.length - 1];
    if (currentProduct > finalProduct) {
      finalProduct = currentProduct;
    }
  }
  return finalProduct;
}
