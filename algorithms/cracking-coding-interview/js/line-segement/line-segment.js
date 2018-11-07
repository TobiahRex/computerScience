const lineSegment = (p1_top, p1_low, p2_top, p2_low) => {
  //Find the y = mx + b formula for each line.
  const p1_slope = getSlope(p1_top[1], p1_low[1], p1_top[0], p1_top[0]);
  const p2_slope = getSlope(p1_top[1], p1_low[1], p1_top[0], p2_top[0]);
  console.log('p1_slope: ', p1_slope);
  console.log('p2_slope: ', p2_slope);
  // Iterate through the domain of each line.
  // Save eaach x value per line, with each y value.
  // Compare the results form a memo, with each-other, and verify if
  // there is an exact pair of x and y values
}
lineSegment(
  [-1, 2], [2, -1], // line 1
  [3, 2], [-3, -2]  // line 2
);

function getSlope(y2, y1, x2, x1) {
  return (y2 - y1) / (x2, x1);
}
