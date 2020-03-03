/*
  Problem Description: Town Judge (997)

  In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.

  If the town judge exists, then:

  The town judge trusts nobody.
  Everybody (except for the town judge) trusts the town judge.
  There is exactly one person that satisfies properties 1 and 2.
  You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

  If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.



  Example 1:

  Input: N = 2, trust = [[1,2]]
  Output: 2
  Example 2:

  Input: N = 3, trust = [[1,3],[2,3]]
  Output: 3
  Example 3:

  Input: N = 3, trust = [[1,3],[2,3],[3,1]]
  Output: -1
  Example 4:

  Input: N = 3, trust = [[1,2],[2,3]]
  Output: -1
  Example 5:

  Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
  Output: 3
*/


(() => {
  const answers = [
    // {
    //   n: 2,
    //   trust: [[0,1]],
    // },
    // {
    //   n: 7,
    //   trust: [[0,1],[6,1],[2,1],[3,1],[4,1],[5,1]],
    // },
    {
      n: 1,
      trust: [],
    },
    {
      n: 6,
      trust: [
        [1,2],
        [6,4],
        [3,2],
        [2,6],
        [4,5],
        [6,1],
        [1,4],
        [1,5],
        [2,3],
        [2,1],
        [4,3],
        [4,2],
        [2,5],
        [4,1],
        [2,4],
        [6,5],
        [3,5]
      ],
    }
    // {
    //   n: 2,
    //   trust: [[1,2]],
    // },
    // {
    //   n: 3,
    //   trust: [[1,2],[1, 3],[2,3]],
    // },
    // {
    //   n: 3,
    //   trust: [[1,3],[2,3],[3,1]],
    // },
    // {
    //   n: 4,
    //   trust: [[1,3],[1,4],[2,3],[2,4],[4,3]],
    // }
  ].map(getAnswer)
  console.log('answers: ', answers);
})();

function getAnswer({ n, trust }) {
  if (!trust.length) return 1;
  const sources = {};
  const destinations = {};

  trust.forEach(([start, end]) => {
    if (!Reflect.has(sources, start)) sources[start] = [];
    if (!Reflect.has(destinations, end)) destinations[end] = [];

    destinations[end].push(start);
    sources[start].push(end);
  });

  let answer = Object
  .keys(destinations)
  .reduce((acc, nextKey) => {
    if (Reflect.has(sources, nextKey)) return acc;

    const uniqueSources = destinations[nextKey].reduce((acc, n) => {
      if (!Reflect.has(acc, n)) acc[n] = true;
      return acc;
    }, {});

    if (Object.keys(uniqueSources).length === (n - 1)) acc = nextKey;
    return acc;
  }, -1);

  return Number(answer);
}
