/*
  Problem Description:
    Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

    Example:

    MovingAverage m = new MovingAverage(3);
    m.next(1) = 1
    m.next(10) = (1 + 10) / 2
    m.next(3) = (1 + 10 + 3) / 3
    m.next(5) = (10 + 3 + 5) / 3

    Start: 15:27
    End: 16:00

    Runtime: 80 ms, faster than 99.74% of JavaScript online submissions for Moving Average from Data Stream.
    Memory Usage: 42.6 MB, less than 100.00% of JavaScript online submissions for Moving Average from Data Stream.
    Next challenges:
*/


(() => {
  const answers = [
    {
      size: 5,
      inputs: [[12009], [1965], [-940], [-8516], [-16446], [7870], [25545], [-21028], [18430], [-23464]],
      expected: [[null, 12009.00000, 6987.00000, 4344.66667, 1129.50000, -2385.60000, -3213.40000, 1502.60000, -2515.00000, 2874.20000, 1470.60000]]
    }
  ].map(({ size, inputs }) => {
    const results = [null];
    const obj = MovingAverage(size);
    inputs.forEach((n) => results.push(obj.next(n)));
    return results;
  });
  console.log('answers: ', answers);
})();

function MovingAverage (size) {
  this.size = size;
  this.sum = 0;
  this.data = new Map()
  const next = ([val]) => {
    if (this.data.size >= this.size) {
        this.sum = this.sum - this.data.get(this.data.size - this.size)
        this.sum = this.sum + val;
        this.data.set(this.data.size, val)
        return (this.sum / this.size);
    } else {
        this.data.set(this.data.size, val);
        this.sum += val;
        return (this.sum / this.data.size);
    }return (this.sum / this.data.size);
    }
  this.next = next;
  return this;
};


// ["MovingAverage", "next", "next", "next", "next", "next", "next", "next", "next", "next", "next"]
// [[5], [12009], [1965], [-940], [-8516], [-16446], [7870], [25545], [-21028], [18430], [-23464]]