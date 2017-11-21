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
const highToLow = (a, b) => b - a;
const getLowest = (prev, next) => {
  const prevNext = Number(prev + next);
  const nextPrev = Number(next + prev);
  return (prevNext < nextPrev ? prevNext : nextPrev);
}
const getAnswer = hTable => Object
  .keys(hTable)
  // .reduce((acc, next) =>
  // {
  //   acc += hTable[next]
  //   .sort(highToLow)
  //   // .reduce(getLowest, '')
  //   console.log(acc);
  //   return acc;
  // }
  // , '');
  .reduce((acc, next) =>
    acc += hTable[next]
      .sort(highToLow)
      .reduce(getLowest, '')
  , '');

const penalty = list => [
    makeHTable,
    getAnswer,
  ].reduce((acc, nxtStep) => nxtStep(acc), list);

// console.log(penalty(['45', '30', '50', '1']));
console.log(penalty(['26', '56', '91', '9', '96', '96']));
/*
  RIGHT '26 56 91 96 96 96 9',
  - The assumption to sort high to low, is incorrect.
  WRONG: '26 56 91 9 96 96 96'
*/

/*
  RIGHT 709 72 77 78 79 94
  - The assumption to sort high to low, is incorrect.
  WRONG: 709 72 78 79 77 94
*/
