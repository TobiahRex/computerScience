
////////////////// The Monkey Problem //////////////////

/*
A monkey want to get to the other side of a river.
The monkey is initially located on the bank of the river,
at position -1, and wants to get home (N).
The monkey can jump any (integer) distance between 1 and D.
If D is less than or equal to N,
then the monkey cannot jump right across the river.

Luckily there are many stones hidden under the water.
The water level is constantly decreasing,
and soon some of the stones will be out of the water.
The monkey can jump to and from the stones,
but only when the particular stone is already out of the water.

The stones in the river are described in the array (A) as,
consisting of N integers.  A[K] represents a TIME,
when the stone at position K will be out of the water.
A[K] = -1   means...
that there is no stone at position K.

You can assume that no two stones will surface simultaneously.
The GOAL is to find the EARLIEST TIME when the monkey
can jump across the river.

For example, consider integer D = 3 and the following array A,
consisting of N = 6 integers.
D = length the monkey can jump.
A = array of all the stone.
K = position in the river of the stone.
A[K] = the time when the stone will surface.

A[0] = 1
A[1] = -1
A[2] = 0
A[3] = 2
A[4] = 3
A[5] = 5

Initially, the monkey cannot jump accross the river in a single jump.
However at time 2, there will be three stones out of the water.
Time 2 is the earlierst moment when the monkey can jump across the river.

Write a function...
function solution(A, D)...

that, given a zero-indexed array A, will return a single number,
that represents the earliest time when the monkey can jump across the river.
*/

function solution(array, jumpLength) {
  /*
    Tracking currentPosition is essential.

    Tracking home will allow us to know if we're close enough to jump from a stone.

    Tracking max required stones is helpful so we don't have to keep looking
      through the array if we're close enough to jump home.

    Tracking the emerged stones serves 2 purposes.
    1) Knowing if we have max required stones
    2) Filter out bad stones (stones less than 0)

    Tracking time, obviously for the answer.
  */
  let currentPosition = -1
  let home = array.length
  let maxRequiredStones = home - jumpLength
  let emergedStones = []
  let time = 0
  console.log('maxRequired Stones: ', maxRequiredStones);

  // We begin by iterating over the stones array.
  for (let i = 0; i < array.length; i++) {
    let currentStone = array[i]
    console.log('\n---------\n');
    console.log('currentStone: ', currentStone);
    /*
      Start by checking if the current stone is in front of us.

      This is because we know that if there is a stone in front of us,
      then we should always take it.
    */
    if (currentStone > currentPosition) {
      emergedStones.push(currentStone)
      console.log('emerged stones: ',emergedStones );
      /*
        Check to see if the current stone can be reached.
      */
      if ((currentStone - jumpLength) <= currentPosition) {
        console.log('2: JUMPED to new Stone', '\ntime: ', i);
        currentPosition = currentStone

        /*
          if the current Position is less than home, and we can't jump to home,
          and we haven't reached the maximum required stones yet,
          then we know we need at least one more stone.
        */
        if (currentPosition < home &&
          (currentPosition + jumpLength) < home &&
          emergedStones.length !== maxRequiredStones) {
          console.log('3: current position: ', currentPosition, ' home: ', home, 'not home yet');
          time += 1
        } else { // otherwise you can make it home from your current position so return i.
          console.log('3b: current position: ', currentPosition, ' home:', home, 'time:', time);
          return i
        }
      }
    }
  }
  console.log('last line');
  return time
}
console.log('answer: ', solution([1,-1,5,0,4,3], 3))
