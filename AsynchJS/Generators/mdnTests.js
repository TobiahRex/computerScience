// /*
//  ------------------- What is it ? -------------------
// The function* declaration (function keyword followed by an asterisk)
// defines a generator function,
// which returns a Generator OBJECT.
//
//
// function* name([param[, param[, ... param]]]) {
//    statements
// }
// can have up to 255 arguments.
//
//  ------------------- Description -------------------
//
// Generators are function,
// that can be exited,
// and later re-entered.
//
// -------------------
//
// Their variable bindings, will be saved across re-entrances.
//
// -------------------
//
// Calling a generator function does not execute its body immediately;
// an ITERATOR OBJECT for the function is returned instead.
//
// -------------------
//
// When the ITERATOR's next() METHOD is called,
// the generator function's body is executed
// until the first yield expression,
// which specifies the value to be returned from the iterator or,
// with yield*, delegates to another generator function.
//
// -------------------
//
// The next() method returns an object
// with a value property ({ value: ... })
// containing the yielded value
// and a done property ({ done: ... })
// which indicates whether the generator has yielded its last value as a boolean.
//
// -------------------
//
// Calling the next() method with an argument
// will resume the generator function execution,
// replacing the yield statement
// where execution was paused with the argument from next().
//
// */
//
// // ------------------- SIMPLE EXAMPLE ------------------- //
// function* idMaker() {
//   var index = 0;
//   while(index < 3)
//     yield index++;
// }
//
// // Calling a generator function does not execute its body immediately;
// // an ITERATOR OBJECT for the function is returned instead.
// let iteratorObject = idMaker();
//
// // calling the next method will call the function generators body.
// iteratorObject.next()  // yo:  { value: 0, done: false }
//
// console.log(iteratorObject.next().value); // 0
// console.log(iteratorObject.next().value); // 1
// console.log(iteratorObject.next().value); // 2
// console.log(iteratorObject.next().value); // undefined
//
//
// // ------------------- Examples with yield* ------------------- //
//
// function* anotherGenerator(i) {
//   yield i + 1; // call 2 returns i + 1
//   yield i + 2;
//   yield i + 3;
// }
//
// function* generator(i){
//   yield i;  // call 1 return
//   yield* anotherGenerator(i);  // call 2 calls generator 2.
//   yield i + 10;
// }
//
// var gen = generator(10);  // call 1 - the generator the first time with 10.
//
// console.log(gen.next().value); // 10
// console.log(gen.next().value); // 11
// console.log(gen.next().value); // 12
// console.log(gen.next().value); // 13
// console.log(gen.next().value); // 20
//
//

function x() {
  this.leak = 'im a leak';
  // console.log('this: ', this);
}
x();
console.log('global: ', global.leak);
delete global.leak
console.log('global: ', global.leak);
