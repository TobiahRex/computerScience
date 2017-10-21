class Hanoi {
  constructor(numDisks) {
    this.numDisks = numDisks;
    this.pegs = [[], [], []];

    while(numDisks) {
      this.pegs[0].push(numDisks--);
    }
  }

  move(source, target) {
    if (this.pegs[source].length === 0) return false;

    if (
      this.pegs[target].length &&
      (this.pegs[source].slice(-1)[0] > this.pegs[target].slice(-1)[0])
    ) return false;

    let disk = this.pegs[source].pop();
    this.pegs[target].push(disk);
    return true;
  }

  solve() {
    if (this.pegs[0].length !== this.numDisks) return new Error('All disks must be on peg 0 to use solve()');

    this.moveStack(this. 1 numDisks, 0, 1, 2);
    return true;
  }

  moveStack(diskToMove, source, other, target) {
    // base case
    if (disksToMove === 0) return;

    this.moveStack(diskToMove - 1, source, target, other);
    this.move(source, target);
    this.moveStack(disksToMove - 1, other, source, target);
  }
}
const hanoi = new Hanoi(3)
console.log(hanoi.pegs);
