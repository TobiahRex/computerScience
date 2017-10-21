/*
  Hanoi:

  Create a function that will move n disks from peg 0, to peg 2 recursively.

  |         |           |
  |         |           |
  |         |           |
  -         -           _
  peg 0     peg 1     peg 2

  Before you can move n disks to peg 2,
  you have to move n - 1 disks to peg 1.
  Before you can move n - 1 disks to peg 1,
  you have to move n - 2 disks to peg 2.

  Step 1:
  - disks
  - disk
  - peg 1: []
  - peg 2: []
  - peg 3: []

  - base case
    Ideas: Base case does not equal input array.
    Therefore we should check each functio call.
    If it does not equal, then we make a move.


*/
class Hanoi {
  constructor(numDisks) {  // numDisks will be an integer.
    this.numDisks = numDisks;
    this.pegs = [[], [], []];
    // pushes in a number between 0 & n representing the amount of disks.
    for(let i = numDisks; i >= 0; --i) {
      this.pegs[0].push(i);
    }
  }

  move(source, target) {
    if (this.pegs[source].length === 0) return false;

    /*
    - this.pegs[target].length is checking to see if we have a length.
    - this.pegs[source].slice(-1)[0] is the top disk in the array from which we are taking a disk.
    - this.pegs[target].slice(-1)[0] is the top disk in the TARGET array which we will place a disk.
    */
    if (this.pegs[target].length &&
      (this.pegs[source].slice(-1)[0] > this.pegs[target].slice(-1)[0])){
      return false;
    }

    let disk = this.pegs[source].pop();
    this.pegs[target].push(disk);
    return true;
  }

  solve() {
    if (this.pegs[0].length !== this.numDisks) {
      console.log(new Error('All disks must be on peg 0 to use solve().'));
      return false;
    }
    this.moveStack(this.numDisks, 0, 1, 2);
    return true;
  }

  // in order to move n disks form a source disk to a target peg, i first need to move n - 1 disks. Which is the way we quantify all disks except the largest one.
  moveStack(disksToMove, source, other, target) {
    /* Base Case
      the idea is that we're subtracting from the amount of disks we need to move on each "moveStack" function call, which allows us to know when we've exhausted our function calling.
    */
    if (disksToMove === 0) return;
    /* For the first call,
      disksToMove - 1 === (n - 1)

      source === peg 0
      other === peg 1
      target === peg 2

      so when we call the function recursively,
      we want the "target" to not be peg 2,
      but rather peg 1.
    */
    this.moveStack(disksToMove - 1, source, target, other);
    /*  Once that is accomplished,
      we want to move the last disk on the source peg, to the target peg.

      source === peg 0
      target === peg 2
    */
    this.move(source, target);
    /* Finally, move the stack on peg 1 to peg 2.

      source = peg 1
      other = peg 0
      target = peg 2
    */
    this.moveStack(n - 1, other, source, target);
  }

  print() {
    /* Iterate over each disk
    this.numDisks = 3
    */

    for (let i = this.numDisks - 1; i >= 0; --i) {
      let line = '';
    // iterate over each peg
      for (let j = 0; j < this.pegs.length; ++j) {

    // if the disk number (which is decrementing) is less than this pegs length count.
        if (i < this.pegs[j].length) {  // if there is a disk on the peg && the current disk is less than that length
          let disk = this.pegs[j][i];  // current disk
          let spacing = '  '.repeat((this.numDisks - 1 - disk) / 2);
          line += spacing;
          line += disk.toString().repeat(disk + 1);
          line += spacing;
        } else {
          line += ' '.repeat(this.numDisks);
        }
        line += ' ';
      }

      console.log(line);
    }
  }
}
