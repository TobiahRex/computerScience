const lineSegment (p1_top, p1_low, p2_top, p2_low) => {
  //Find the y = mx + b formula for each line.
  const slope = getSlope(args);
  console.log('slope: ', slope);
  // Iterate through the domain of each line.
  // Save eaach x value per line, with each y value.
  // Compare the results form a memo, with each-other, and verify if
  // there is an exact pair of x and y values
}
lineSegment([-1, 2], [2, -1], [3, 2], [-3, -2]);

function getSlope(p1_x, p1_y, p2_x, p2_y) {
  return (p2_y - p1_y) / (p2_x, p1_x);
}
