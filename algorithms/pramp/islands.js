/*
  Problem Description:
  Island Count
  Given a 2D array binaryMatrix of 0s and 1s, implement a function
  getNumberOfIslands that returns the number of islands of 1s in binaryMatrix.

  An island is defined as a group of adjacent values that are all 1s. A cell
  in binaryMatrix is considered adjacent to another cell if they are next to
  each either on the same row or column. Note that two values of 1 are not part
  of the same island if they’re sharing only a mutual “corner”
  (i.e. they are diagonally neighbors).

  Explain and code the most efficient solution possible and analyze its time and space complexities.
*/


(() => {
  const answers = [
    // {
    //   binaryMatrix: [[0]], // 0
    // },
    // {
    //   binaryMatrix: [[1,0,1,0]], // 2
    // },
    {
      binaryMatrix: [
        [1,0,1,0,1],
        [0,1,1,1,0],
        [0,0,1,0,0]
        [1,0,0,1,0]
        [0,1,0,1,0]
      ], // 6
    }
  ].map(getNumberOfIslands)
  console.log('answers: ', answers);
})();

function getNumberOfIslands({ binaryMatrix }) {
  let answer = 0;
  const memo = {};

  for (let i = 0; i < binaryMatrix.length; i++) {
    for (let j = 0; j < binaryMatrix[0].length; j++) {
      const { current, top, behind } = getPointers(binaryMatrix, memo, i , j);
      current
      top
      behind
      if (current === 1) {
        if (behind === 1) {
          continue;
        } else {
          if (top === 1) {
            continue
          } else {
            current
            top
            behind

            answer += 1;
            answer
          }
        }
      }
    }
  }
  return answer;
}

function getPointers(matrix, memo, iRow, iCol) {
  let current = matrix[iRow][iCol];
  let top = 0;
  let behind = 0;

  if (iRow === 0 && 0 === iCol) {
    top = 0;
    behind = 0;
  } else if (iRow === 0) { // first row
    top = 0;
    if (iCol === 0) behind = 0;
    else behind = matrix[0][iCol - 1];
  } else if (iCol === 0) { // first column
    behind = 0;
    if (iRow === 0) top = 0;
    else top = matrix[iRow - 1][0];
  } else {
    top = matrix[iRow - 1][iCol];
    behind = matrix[iRow][iCol - 1];
  }
  return { current, top, behind };
}
