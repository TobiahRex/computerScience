(() => {
  const answers = [
    6,
  ].map(getAnswerRecursive)
  console.log('answers: ', answers);
})();

function getAnswerRecursive(n) {
	const memo = {
		1: 0,
		2: 1,
	};

  function getFib(n, memo) {
		if (n === 2 || n === 1)	return memo[n];

		if (!Reflect.has(memo, n)) {
			memo[n] = getFib(n - 2, memo) + getFib(n - 1, memo);
		}

		return memo[n];
	}

	return getFib(n, memo);
}

/*
  Problem Description:
  Calculate the Nth Fibonacci number.

  Input: 4
  Ouput: 2 [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
*/

function getAnswerIterative(n) {
  const answers = [0, 1];

  for (let i = 0; i < n - 2; i++) {
    let sum = answers[0] + answers[1];
    answers[0] = answers[1];
    answers[1] = sum;
  }

  return answers[1];
}


/*
  Las Acequias:
   - Dad's office:
   - Fibonacci sitting in his chair. Dad standing arguing from the front of
   the desk. Dad is advocating "circular" (recursive) solution to some problem.
   - Fibonacci is saying that you only need 2 pieces items, no "circular" solution.
   - Dad has a massive book (Memo), with millions of pages, and he's emphasizing,
   how it all starts with 1: 0, and 2: 1.
*/
