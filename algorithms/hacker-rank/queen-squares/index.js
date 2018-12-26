// Problem location : https://www.hackerrank.com/challenges/queens-attack-2/problem
(() => {
  let input = [
    '8 3',
    '6 7',
    '5 5',
    '4 2',
    '2 3'
  ];

  let result = queensAttack(input);
  console.log(result); // Expected = 10
})();

function queensAttack(input) {
  let answer = 0;
  let board = input[0][0];
  let queen = input[1];

  let obstructions = input.slice(2);
  board
  queen
  obstructions
  // NOTE Edge cases?


  // NOTE Control Flow:
  // calculate vertical and horizontal squares.
  // vertical is board size, minus 1.
    let verticalSpaces = board - 1;
    // horizontal is board size, minus 1.
    let horizontalSpaces = board - 1;
    answer += verticalSpaces;
    answer += horizontalSpaces;

                                                                // EXPECTED:  board = 4, answer = 8

  // calculate diagonal squares.
    // if the board is EVEN, then the middle is a edge-point.
  let totalDiagonal = 0,
    finalDiagonal = 0,
    riseChange = 0,
    mid = 0,
    trueDistanceFromCenter = 0;

  if (board % 2 === 0) {
    totalDiagonal = ((board * 2) - 2) - 1;
    mid = (board / 2);
  } else {
    mid = Math.ceil(board / 2);
    totalDiagonal += ((board * 2) - 1) - 1;
  }
  totalDiagonal

  trueDistanceFromCenter = Math.max(Math.abs(mid - queen[0]), Math.abs(mid - queen[2])) - 1;

  while(trueDistanceFromCenter > 0) {
    totalDiagonal -= 2;
    totalDiagonal
    trueDistanceFromCenter -= 1;
  }

  answer += totalDiagonal;

  obstructions.forEach((obs) => {
    if (obs[0] === queen[0]) {
      if (obs[2] > queen[2]) {
        answer -= ((board - obs[2]) - 1);
      } else {
        answer -= ((queen[2]) - obs[2]);
      }
    } else if (obs[2] === queen[2]) {
      if (obs[0] > queen[0]) {
        answer -= ((board - obs[0]) - 1);
      } else {
        answer -= ((queen[0] - obs[0]));
      }
    }
  });
  return answer;
    // if the board is ODD, then the middle is an actual sqare.
      // e.g. 3 x 3

}

/*
  * * *
  * * *
  * * *   diagonal = 4 total.

  * * q  diagonal = 4 - 2 (1 shift up)
  * * *
  * * *

  * * * * 5
  * * * 7 *
  * * 9 * *
  * * * * *
  * * * * *


  EVEN = total diagonal - 2.
  ODD = total diagonal - 1;

  * * * 4  diagonal = 8 total
  * * 6 *  from anywhere in the inner-most square, there's 6 total diagonal squares - not including the queens square
  * * * *
  * * * *

  * * * * * 6
  * * * * 8 *
  * * * 10 * *
  * * * * * *
  * * * * * *
  * * * * * *

*/
