const seriesAP = (inputs, required) => {
  // take the difference of the two numbers as magnitude
  // increment a sum by the magnitude.
  // iterate for as many times as necessary.
  let magnitude = inputs[1] - inputs[0],
    count = inputs.length,
    sum = inputs[1];

  while(count++ < required) sum += magnitude;
  return sum;
}

console.log(
  seriesAP(
    // [2, 4],
    // 4
    [1, 1],
    10
  )
);
