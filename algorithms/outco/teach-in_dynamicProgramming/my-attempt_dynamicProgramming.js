(() => {
  const answers = [
    {
      num: 5,
    }
  ].map(({ num }) => getAnswer(num))
  console.log('answers: ', answers);
})();

function getAnswer(num, memo = {}, steps = 0) {
  num
  memo
  steps

  if (((num / 3) % 1) > 0) {
    if (((num / 2) % 1) > 0) {
      if (num - 1 === 0) {
        num
        return;
      } else {
        const subtract1 = num - 1;
        if (!(subtract1 in memo)) {
          steps += 1;
          const answer = getAnswer(num - 1, memo, steps);
          memo[subtract1] = answer;
          // if (memo[subtract1] === 1) return steps;
        } else {
          return memo[subtract1];
        }
      }
      return steps;
    } else {
      const divideByTwo = num / 2;
      if (!(divideByTwo in memo)) {
        steps += 1;
        const answer = getAnswer(num / 2, memo, steps);
        memo[divideByTwo] = answer;
        // if (memo[divideByTwo] === 1) return steps;
      } else {
        return memo[divideByTwo];
      }
    }
  } else {
    const divideByThree = num / 3;
    if (!(divideByThree in memo)) {
      steps += 1;
      const answer = getAnswer(num / 3, memo, steps);
      memo[divideByThree] = answer;
      // if (memo[divideByThree] === 1) return steps;
    } else {
      return memo[divideByThree];
    }
  }
  return steps;
}
