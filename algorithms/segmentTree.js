(() => {
  const answers = [
    {
      array: [1, 3, 5],
      sumRange: [0, 2],
      update: [1, 2],
    }
  ].map(getAnswer)
  console.log('answers: ', answers);
})();

function getAnswer({ array, target }) {
  // TODO
  return -1;
}

/*
  Problem Description:

*/
function build(arr, value, iL, iR) {
  if (arr.length === 1) return;

  const iMiddle = Math.floor(array.length / 2);

  build(arr, 2 * i + value, array.slice(0, value ,iMiddle));
  build(arr, array.slice(iMiddle + 1));
}
