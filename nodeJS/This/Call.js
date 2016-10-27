// --------------- Call --------------- //



// --------------- Standard Use case

let avgScore = "global avgScore";
​

function avg (arrayOfScores) {
  // Add all the scores and return the total​
  let sumOfScores = arrayOfScores.reduce ((prev, cur, index, array) => prev + cur);
  ​
  // The "this" keyword here will be bound to the global object, unless we set the "this" with Call or Apply​
  this.avgScore = sumOfScores / arrayOfScores.length;
}
​
let gameController = {
  scores  :[20, 34, 55, 46, 77],
  avgScore:null​
}
​
/*
If we execute the avg function thus,
"this" inside the function is bound to the global window object:​
*/
avg (gameController.scores);
// Proof that the avgScore was set on the global window object​
console.log (window.avgScore); // 46.4​
console.log (gameController.avgScore); // null​
​
// reset the global avgScore​
avgScore = "global avgScore";
​
/* To set the avgScore of the gameController obj
we use call() on the avg obj, and pass in "gameController" as the first arg.
We do this because we used the "this" keyword inside of the avg() on line 10.
If we want the "this" on line 10 to point to the gameController obj,
then we need to use call().  The second argument we pass to call,
is the required argument for avg to actually calculate.
So we pass in gameController.scores.

When the function runs, it will eventually set the "avgScores" prop to a new value,
on the gameController obj, using the "this" keyword.

Call is useful instead of bind, because it does not make a permanent change.
It simply allows gameController obj, to use have a property set using a
BORROWED function, while letting avg maintain it's own avgScore.
*/
avg.call(gameController, gameController.scores);
​
console.log (window.avgScore); //global avgScore​
console.log (gameController.avgScore); // 46.4​


// --------------- Callback use case
