function rota(rooms) {
  while (rooms.length < 7) rooms = rooms.concat(rooms);  // extend array to at least size 7

return rooms
.slice(0, 7) // get only first 7 values ...
.sort(() => Math.random() - 0.5) // shuffle array...
.reduce((a, n, i, arr) => {  // verify no duplicates...
  if (i < 5 && a[i] === n) {  // if duplicate is found before last 2 values,
    a[i] = n;  // over-write last with current,
    a.push(arr[i - 1]);  // re-insert overwritten value from cache.
    return a;
  }
  a.push(n);  // insert new value.
  return a;
}, []);
//   if (rooms.length === 7) {
//     const results = [];
//     let last = '';
//
//     while(results.length < 7) {
//       const getRandomI = () => Math.floor(Math.random() * rooms.length);
//       let randomI = getRandomI();
//       const getRoom = (i) => rooms[i];
//       let current = getRoom(randomI);
//
//       while(current === last) {
//         if (rooms.length === 2) {
//           randomI = randomI === 0 ? 1 : 0;
//           current = getRoom(randomI);
//         }
//         else {
//           randomI = getRandomI();
//           current = getRoom(randomI);
//         }
//       };
//       results.push(rooms.splice(randomI, 1)[0]);
//       last = current;
//     }
//     return results;
//   }
//   else if (rooms.length < 7) {
//     while(rooms.length < 7) rooms = rooms.concat(rooms);
//     return rota(rooms.slice(0, 7));
//   }
//   return rota(rooms.slice(0, 7));
// }

// console.log(rota(['one', 'two', 'three', 'four', 'five', 'six', 'seven']));
console.log(rota(['one', 'two', 'three']));
