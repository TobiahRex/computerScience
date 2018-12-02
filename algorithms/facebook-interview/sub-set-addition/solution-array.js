const main = (seq, t) => {
  let sum = 0, answer = false, i = 0;

  let currentSequence = [];

  for (let i = 0; i <= seq.length; i++) {                                                       // NOTE: O(n) | size of Sequence collection
    if (sum === t) { // if answer is found, break;
      answer = true;
      break;
    } else if (sum > t) { // if the sum is greater than t,
      // subtract the first element in the sequence, and continue doing so,
      // while the sum is not the answer, or until the current sequence has no more values.
      while(currentSequence.length) {                                                           // NOTE: O(n * k)  | K = length of CurrentSequence
        let v = currentSequence.pop();
        sum -= v;
        if (sum === t) {
          answer = true;
          break;
        }
      }
    } else { // otherwise, the sum is not too high, so add to it.
      sum += seq[i];
      currentSequence.unshift(seq[i]);                                                           // NOTE: O(n * k)  | K = length of CurrentSequence
    }
    if (answer) break;
  }

  currentSequence
  sum
  answer

  return answer;
}

console.log(main([23, 5, 4, 7, 2, 11], 20));
