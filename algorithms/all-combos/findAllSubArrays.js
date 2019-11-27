(() => {
  const answers = [
    // [1, 1, 2, 2, 3, 4],
    [1, 2, 3]
  ].map((input) => findAllSubSequence(input))
  console.log('answers: ', answers[0].answer, '\n', answers[0].memo);
})();

function findAllSubSequence(input, start = 0, end = input.length, memo = {}) {
  if (start > input.length || end < 0) return memo;

  const next = input.slice(start, end);
  const combo = `${start}-${end}`;

  if (Reflect.has(memo, combo)) {
    return memo;
  } else {
    if (next.length) memo[combo] = next;
    findAllSubSequence(input, start + 1, end, memo);
    findAllSubSequence(input, start, end - 1, memo);
  }

  return {
    memo,
    answer: Object.values(memo),
  };
}

/*
  Problem Description:
  Simply output all the combinations of arrays given an input array.
*/
