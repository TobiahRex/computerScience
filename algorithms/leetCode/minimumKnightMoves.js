(() => {
  const answers = [
    {
      input: [2, 1],

    }
  ].map(getAnswer)
  console.log('answers: ', answers);
})();

function getAnswer(input) {
  // TODO
  return -1;
}

/*
  Problem Description:

*/

/*
  Solution
  DP(x, y) = min(DP(x - 2)(y - 1))
*/
