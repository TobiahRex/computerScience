/**
  @function

*/


(() => {
  console.time('answer');
  const answers = [
    {
      x: 'x',
    }
  ].map(getAnswer);
  console.timeEnd('answer');
  console.log('answers: ', answers.join('\n'));
})();

function getAnswer(input) {
  // TODO
  return -1;
}
