// --------------- Call --------------- //

// // --------------- Standard Use case
//
// let avgScore = "global avgScore";
// ​
//
// function avg (arrayOfScores) {
//   // Add all the scores and return the total​
//   let sumOfScores = arrayOfScores.reduce ((prev, cur, index, array) => prev + cur);
//   ​
//   // The "this" keyword here will be bound to the global object, unless we set the "this" with Call or Apply​
//   this.avgScore = sumOfScores / arrayOfScores.length;
// }
// ​
// let gameController = {
//   scores  :[20, 34, 55, 46, 77],
//   avgScore:null​
// }
// ​
// /*
// If we execute the avg function thus,
// "this" inside the function is bound to the global window object:​
// */
// avg (gameController.scores);
// // Proof that the avgScore was set on the global window object​
// console.log (window.avgScore); // 46.4​
// console.log (gameController.avgScore); // null​
// ​
// // reset the global avgScore​
// avgScore = "global avgScore";
// ​
// /* To set the avgScore of the gameController obj
// we use call() on the avg obj, and pass in "gameController" as the first arg.
// We do this because we used the "this" keyword inside of the avg() on line 10.
// If we want the "this" on line 10 to point to the gameController obj,
// then we need to use call().  The second argument we pass to call,
// is the required argument for avg to actually calculate.
// So we pass in gameController.scores.
//
// When the function runs, it will eventually set the "avgScores" prop to a new value,
// on the gameController obj, using the "this" keyword.
//
// Call is useful instead of bind, because it does not make a permanent change.
// It simply allows gameController obj, to use have a property set using a
// BORROWED function, while letting avg maintain it's own avgScore.
// */
// avg.call(gameController, gameController.scores);
// ​
// console.log (window.avgScore); //global avgScore​
// console.log (gameController.avgScore); // 46.4​


// --------------- Borrowing Array.prototype methods.
// An array-like object: note the non-negative integers used as keys​
var anArrayLikeObj = {
  0: "Martin",
  1: 78,
  2: 67,
  3: ["Letta", "Marieta", "Pauline"],
  length: 4
};

/*
Make a quick copy and save the results in a real array:​
First parameter sets the "this" value​
Second parameter sets the required parameter for the slice method: the starting index.
*/
var newArray = Array.prototype.slice.call(anArrayLikeObj, 0);
console.log (newArray); // ["Martin", 78, 67, Array[3]]​
​
/*
Search for "Martin" in the array-like object​
First param, set's the this value.
Second, sets the required parameter for the indexOf method returning -1 if nothing is found.
*/
console.log (Array.prototype.indexOf.call(anArrayLikeObj, "Martin") === -1 ? false : true); // true​
​
// Try using an Array method without the call () or apply ()​
console.log (anArrayLikeObj.indexOf ("Martin") === -1 ? false : true);
// Error: Object has no method 'indexOf'​
​
// Reverse the object:​
console.log (Array.prototype.reverse.call (anArrayLikeObj));
// {0: Array[3], 1: 67, 2: 78, 3: "Martin", length: 4}​
​
// Sweet. We can pop too:​
console.log (Array.prototype.pop.call (anArrayLikeObj));
console.log (anArrayLikeObj); // {0: Array[3], 1: 67, 2: 78, length: 3}​
​
// What about push?​
console.log (Array.prototype.push.call (anArrayLikeObj, "Jackie"));
console.log (anArrayLikeObj); // {0: Array[3], 1: 67, 2: 78, 3: "Jackie", length: 4}​
