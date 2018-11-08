/*
  Strategy
  1) Find the y = mx + b equation for each line.
  2) Set each y value equal to each other and solve for x, this will be "common_x";
  3) Using "common_x", use one of the line equations to solve for y. This will be "common_y";
*/

const lineSegment = (p1_top, p1_low, p2_top, p2_low) => {
  // Find the y = mx + b formula for each line.
  // 1) Find Slope
  const p1_slope = getSlope(p1_low[1], p1_top[1], p1_low[0], p1_top[0]);
  const p2_slope = getSlope(p2_low[1], p2_top[1], p2_low[0], p2_top[0]);
  // 2) Find f(x) => y = mx + b
  // First, find b => b = y - (slope * x)
  const p1_b = p1_top[1] - (p1_slope.result * p1_top[0]);
  const p2_b = p2_top[1] - (p2_slope.result * p2_top[0]);
  // 3) find y => f(x) = (slope * x) + b
  // set each y = mx + b equation equal to each other, and solve for x (common x);
  const common_x = (p1_b - p2_b) / ((p2_slope.rise - (p1_slope.result * p2_slope.run))/p2_slope.run);

  // use common x to solve for common y using either y equation.
  const common_y = (p1_slope.result * common_x) + p1_b;

  // output the results.
  console.log('x: ', common_x, '\ny: ', common_y);

}
lineSegment(
  [-1, 2], [2, -1], // line 1
  [4, 2], [-4, -6]  // line 2
);

function getSlope(y2, y1, x2, x1) {
  return {
    rise: y2 - y1,  // - 1 - 2 == -3
    run: x2 - x1,   // 2 - (-1) == 3
    result: (y2 - y1) / (x2 - x1)
  }
}
