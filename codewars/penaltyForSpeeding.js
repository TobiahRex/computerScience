/*
  You have been speeding on a motorway and a police car had to stop you. The policeman is a funny guy that likes to play games. Before issuing penalty charge notice he gives you a choice to change your penalty.

  Your penalty charge is a combination of numbers like: speed of your car, speed limit in the area, speed of the police car chasing you, the number of police cars involved, etc. So, your task is to combine the given numbers and make the penalty charge to be as small as possible.

  For example, if you are given numbers [45, 30, 50, 1] your best choice is 1304550

  Examples:

  ['45', '30', '50', '1'] => '1304550'

  ['100', '10', '1'] => '100101'

  ['32', '3'] => '323
*/
/* return str of the smallest value of the combined numbers in a_list */
const makeHTable = arr => arr
  .reduce((acc, next) => {
    const n = Number(next[0]);
    !Array.isArray(acc[n]) ? acc[n] = Array(next) : acc[n].push(next);
    return acc;
  }, {});
const getLowest = (n1 = '', n2 = '') => {
  const n1n2 = Number(n1 + n2);
  const n2n1 = Number(n2 + n1);
  return (n1n2 < n2n1 ? String(n1n2) : String(n2n1));
}
const getKeyAnswer = (arr) => {
  if (arr.length === 1) return arr[0];

  const paired = [];
  for (let i = 0, j = 1; i < arr.length; i += 2, j += 2) {
    paired.push(getLowest(arr[i], arr[j]));
  }
  if (paired.length > 1) return getKeyAnswer(paired);
  return paired[0];
}
const getAnswer = hTable => Object
  .keys(hTable)
  .reduce((acc, next) => (acc += getKeyAnswer(hTable[next].sort((a, b) => b.length - a.length))), '');

const penalty = list => [
    makeHTable,
    getAnswer,
  ].reduce((acc, nxtStep) => nxtStep(acc), list);

console.log(penalty(['91', '92', '9' ]));
/*
  RIGHT '13 13 14 19 46 79 82 91 92 9',
  - The assumption to sort high to low, is incorrect.
  WRONG: '13 13 14 19 46 79 82 91 9 92'
*/

/*
  RIGHT 709 72 77 78 79 94
  - The assumption to sort high to low, is incorrect.
  WRONG: 709 72 78 79 77 94
*/
