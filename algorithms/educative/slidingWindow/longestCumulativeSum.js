(() => {
  const answers = [
    {
      array: [23, 2, 4, 6, 7],
      target: 6,
    }
  ].map(getAnswer)
  console.log('answers: ', answers);
})();

function getAnswer({ array, target }) {
  // let front = back = num = 0;
  //
  // while(front < array.length) {
  //   num = array[front];
  // }
}

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

*/
