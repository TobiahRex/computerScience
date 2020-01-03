(() => {
  const answers = [
    4
  ].map((input) => taylorSeries(input))
  console.log('answers: ', answers);
})();

function taylorSeries(x, n = undefined) {
  let p = f = 1;

  if (n === undefined) n = x;
  if (n === 0) return 1;

  else {
    let r = taylorSeries(x, n - 1);

    p *= x;

    f *= n;

    return (r + p/f);
  }
}

/*
  Problem Description:
  n mathematics, a Taylor series is a representation of a function as an
  infinite sum of terms that are calculated from the values of the function's
  derivatives at a single point

  Write a function that will produce the Taylor Series answer given an input X.
*/
