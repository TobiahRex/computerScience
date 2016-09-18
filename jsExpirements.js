// function x(){
//   const hi = 'hi from x'
//   console.log(hi)
// }
//
// function y(){
//   const hi = 'hi from y'
//   console.log(hi);
// }
// x()
// y()

// function z() {
//     const hi = 'hi from z'
//     console.log(hi);
//
//   let i = 0
//   while(i < 2) {
//     i++
//     const hi = 'hi from while loop'
//     console.log(hi);
//   }
// }
// z()

// function switchEx(number) {
//   switch(number) {
//     case 0: {
//       const hi = 'hi from case 0'
//       console.log(hi)
//     }; break;
//     case 1: {
//       const hi = 'hi from case 1'
//       console.log(hi)
//     }; break;
//   }
// }
// switchEx(1)

// function varExp() {
//   var x = 'hi'
//
//   console.log(x)
//   for(var x = 0; x < 2; x++){
//
//     console.log(x)
//   }
// }
// varExp()


// let x = function() { console.log('function this: ', this)}
// let x = () => console.log('function this: ', this)
// x()

let string = 'Hello Tobiah Rex'
string.replace(/\w+/g, '$1yo$2')
console.log(string)
