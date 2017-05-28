function initialValue() {
  const data = [];
  console.log(data.reduce((a, b) => a + b, 10));
}
// initialValue();

function tally() {
  const data = [
    'angular',
    'angular',
    'angular',
    'react',
    'react',
    'react',
    'react',
    'ember',
    'vanilla',
    'vanilla',
  ];
  const results = data.reduce((accum, next) => {
    if (accum[next]) {
      accum[next] += 1;
      return accum;
    }
    accum[next] = 1;
    return accum;
  }, {});
  console.log(JSON.stringify(results, null, 2));
}
tally();
