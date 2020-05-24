function seriesGP(inputs, iterations) {
  if (iterations == 1 || iterations == 2) return inputs[iterations - 1];

  let [
    ratio, count, answer
  ] = [
    inputs[1] / inputs[0], 2, inputs[1],
  ];
  while(count++ < iterations) {
    answer *= ratio;
  }
  return Math.floor(answer);
}

(() => {
  console.log(
    seriesGP(
      [2, 3],
      4
    )
  )
})();
