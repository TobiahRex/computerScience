// //---Delete Property from an Object ---//
// let obj = {
//   a: 1,
//   b: 2
// }
// delete obj['a']; // obj: { b: 2}

// //---Create a Memo---//
// let obj = {}
// let str = 'oakland athletics';
// for (let i = 0; i < str.length; i++) {
//   if(str[i] !== ' ') {
//     obj[str[i]] = ++obj[str[i]] || 1; // does not include spaces.
//   }
// }
// console.log('obj: ', obj); // obj:  { o: 1, a: 3, k: 1, l: 2, n: 1, d: 1, t: 2, h: 1, e: 1, i: 1, c: 1, s: 1 }

// //---Sort Object by Keys---//
// let obj = {
//   z: 34,
//   d: 28,
//   q: 85,
//   c: 11,
//   a: 109
// }
// let newObj = {}
// Object.keys(obj).sort().forEach((key) => {
//   newObj[key] = obj[key]
// });
// console.log('newObj: ', newObj);

// //---Sort Object by Values---//
// let obj = {
//   z: 34,
//   d: 28,
//   q: 85,
//   c: 11,
//   a: 109
// }
// let newObj = {}
// Object.keys(obj).sort((a, b) => {
//   if((obj[a] - obj[b]) > 0) return (+1)
//   if((obj[a] - obj[b]) === 0) return 0
//   if((obj[a] - obj[b]) < 0) return (-1)
// }).forEach((key) => {
//   newObj[key] = obj[key];
// });
// console.log('newObj: ', newObj);

// //---Automatically Sort an Object due to Keys === Number---//
// let obj = {
//   3: 'a',
//   8: 'b',
//   6: 'c',
//   1: 'd',
//   7: 'e',
//   2: 'f'
// }
// console.log('obj: ', obj); // obj:  { '1': 'd', '2': 'f', '3': 'a', '6': 'c', '7': 'e', '8': 'b' }

// Object Key lookup Runtime
let obj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11,
  l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22,
  w: 23, x: 24, y: 25, z: 26, aa: 1, bb: 2, cc: 3, dd: 4, ee: 5, ff: 6, gg: 7,
  hh: 8, ii: 9, jj: 10, kk: 11, ll: 12, mm: 13, nn: 14, oo: 15, pp: 16, qq: 17,
  rr: 18, ss: 19, tt: 20, uu: 21, vv: 22, ww: 23, xx: 24, yy: 25, zz: 26, aa: 1,
  bb: 2, cc: 3, dd: 4, ee: 5, ff: 6, gg: 7, hh: 8, ii: 9, jj: 10, kk: 11, ll: 12,
  mm: 13, nn: 14, oo: 15, pp: 16, qq: 17, rr: 18, ss: 19, tt: 20, uu: 21, vv: 22,
  ww: 23, xx: 24, yy: 25, zz: 26, aaa: 1, bbb: 2, ccc: 3, ddd: 4, eee: 5, fff: 6,
  ggg: 7, hhh: 8, iii: 9, jjj: 10, kkk: 11, lll: 12, mmm: 13, nnn: 14, ooo: 15,
  ppp: 16, qqq: 17, rrr: 18, sss: 19, ttt: 20, uuu: 21, vvv: 22, www: 23, xxx: 24,
  yyy: 25, zzz: 26, aaaa: 1, bbbb: 2, cccc: 3, dddd: 4, eeee: 5, ffff: 6, gggg: 7,
  hhhh: 8, iiii: 9, jjjj: 10, kkkk: 11, llll: 12, mmmm: 13, nnnn: 14, oooo: 15,
  pppp: 16, qqqq: 17, rrrr: 18, ssss: 19, tttt: 20, uuuu: 21, vvvv: 22, wwww: 23,
  xxxx: 24, yyyy: 25, zzzz: 26,
}
console.time('objHasProp')
// obj['z'] ? console.log('true') : console.log(false); // obj[] ? : 2.573ms
obj.hasOwnProperty('z'); // objHasProp: 0.510ms
console.timeEnd('objHasProp')
//
// console.time('objHasProp')
// obj.hasOwnProperty('zz'); // objHasProp: 0.567ms
// obj['zz'] ? console.log(true) : console.log(false); // obj[] ? : 3.097ms
// console.timeEnd('objHasProp')
//
// console.time('objHasProp')
// obj.hasOwnProperty('zzz'); // objHasProp: 0.503ms
// obj['zzz'] ? console.log(true) : console.log(false); // obj[] ? : 3.904ms
// console.timeEnd('objHasProp')
//
// console.time('objHasProp')
// obj.hasOwnProperty('zzzz'); // objHasProp: 0.547ms (varies)
// obj['zzzz'] ? console.log(true) : console.log(false); // obj[] ? : 4.204ms
// console.timeEnd('objHasProp')
//
// console.time('Object.keys')
// Object.keys(obj)
// console.timeEnd('Object.keys')
//
// let item = 'zzz'
// console.time('forIn');
// for (let key in obj) {
//   obj[key] === item
// }
// // obj['zzz'] ? true : false;
// // obj.hasOwnProperty('zzz')
// console.timeEnd('forIn'); // 2.73 ms
