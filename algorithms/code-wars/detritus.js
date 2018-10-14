function bouncingBalls(detritus) {
  return detritus.reduce((acc, next) => {
    if (next === 58) {
      acc.weight += next;
      return acc;
    }
    return acc;
  }, { weight: 0 })
}

console.log(bouncingBalls([58, 23, 65, 40, 58]));
