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
}
const hanoi = new Hanoi(3)
console.log(hanoi.pegs);
