function rota(rooms) {
  if (rooms.length >= 7) {
    const results = [];
    let last = '';

    while(results.length < 7) {
      const getRandomI = () => Math.floor(Math.random() * rooms.length);
      let randomI = getRandomI();
      const getRoom = (i) => rooms[i];
      let current = getRoom(randomI);

      while(current === last) {
        if (rooms.length === 2) {
          randomI = randomI === 0 ? 1 : 0;
          current = getRoom(randomI);
        }
        else {
          randomI = getRandomI();
          current = getRoom(randomI);
        }
      };
      results.push(rooms.splice(randomI, 1)[0]);
      last = current;
    }
    return results;
  }
  else {
    let newRooms = rooms.concat(rooms);
    while(newRooms.length < 7) newRooms = newRooms.concat(rooms);
    return rota(newRooms.slice(0, 7));
  };
}

// console.log(rota(['one', 'two', 'three', 'four', 'five', 'six', 'seven']));
console.log(rota(['one', 'two', 'three']));
