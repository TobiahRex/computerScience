const main = (seq, t) => {
  let sum = 0;
  let memo = {};
  let answer = false;

  for (let i = 0; i < seq.length; i++) {
    for (key in memo) {
      let currentSum = Number(key) + seq[i];
      if (currentSum <= t) {
        memo[key].push(seq[i]);

        memo[currentSum] = memo[key];
        delete memo[key];

        if (currentSum === t) {
          answer = true;
          break;
        }
      }
      else {
        delete memo[key];
      }
    }
    memo[seq[i]] = [seq[i]];
    if (answer) break;
  }
  return answer;
}
let multiples = [10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000];
let input = [];
for (let i = 0; i < 1000; i++) {
  input.push(Math.floor(Math.random() * multiples[Math.floor(Math.random() * 9)]))
};
let total = multiples[Math.floor(Math.random() * 5)];
// total
// input
console.log(main([23, 5, 4, 7, 2, 11], 20));
// console.log(main(input, 100));
