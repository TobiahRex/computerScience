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
    if (accum[next]) accum[next] += 1
    else accum[next] = 1;
    return accum;
  }, {});
  console.log(JSON.stringify(results, null, 2));
}
// tally();
function flatten() {
  const data = [[1,2,3], [4,5,6], [7,8,9]];
  const result = data.reduce((accum, next) => {
    return accum.concat(next);
  }, [])
  console.log(result);
}
// flatten();
function flatTally() {
  const data = [
    {
      title: 'Batman-Begins',
      year: 2006,
      cast: [
        'Christian Bale',
        'Michael Caine',
        'Liam Neeson',
        'Katie Holmes',
        'Gary Oldman',
        'Cilian Murphy',
      ],
    },
    {
      title: 'The Dark Knight',
      year: 2008,
      cast: [
        'Christian Bale',
        'Heath Ledger',
        'Aaron Eckhart',
        'Michael Caine',
        'Gary Oldman',
        'Morgan Freeman',
      ],
    },
    {
      title: 'The Dark Knight Rises',
      year: 2012,
      cast: [
        'Christian Bale',
        'Gary Oldman',
        'Tom Hardy',
        'Michael Caine',
        'Joseph Gordon-Levitt',
        'Anne Hathaway',
        'Morgan Freeman',
        'Marion Cotillard',
      ],
    },
  ];
  const flatTally1 = data.reduce((accum, next) => {
    next.cast.forEach((cast) => {
      if (accum[cast]) accum[cast] += 1;
      else accum[cast] = 1;
    });
    return accum;
  }, {});
  console.log(flatTally1);

  const flatTally2 = data.reduce((accum, next) => {
    next.cast.forEach((cast) => {
      if (!accum.includes(cast)) accum.push(cast);
    })
    return accum;
  }, []);
  console.log(flatTally2);
}
// flatTally();
