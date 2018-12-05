(() => {
  let string = 'tobyrextoby';
  getScore(string);
})();

function getScore(str) {
  // Write your code here
  let len = str.length, matrix = [];
  for (let i = 0; i < str.length; i++) {
    matrix[i] = new Array(len).fill(0);
    matrix[i][i] = 1;
  }
  console.log(matrix)
  // create a sliding-window
  // dynamically grow the size of the window
  for (let window = 2; window <= len; window++) {
    // for each window,
    // compare the left and right-bound values of the window
    for (let i = 0, j; i < (len - window + 1); i++) {  // +1 due to the right-bound of the window
      // calculate the right-bound index value
      j = (len - window) - 1  // the current left-bound value + the window size, minus 1 for 0-based index.
      if (str[i] === str[j] && window === 2) { // if the very first 2 values are equal, incrememnt by 1 instead of the normal 2
        matrix[i][j] = 2
      } else if (str[i] === str[j]) { // assign as sum of bottom-left diagonal value and 2
        matrix[i][j] = matrix[i + 1][j - 1] + 2;
      } else { // else, take the larger of the bottom or left value.
        matrix[i][j] = Math.max(str[i + 1][j], str[i][j - 1]);
      }
    }
  }
  console.log(matrix)
  return matrix[0][len - 1]; // return the right-most matrix value since it is the largest count.
}
