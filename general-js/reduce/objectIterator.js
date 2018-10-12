const luke = {
  name: 'luke skywalker',
  jedi: true,
  parents: {
    father: {
      jedi: true,
    },
    mother: {
      jedi: false,
    }
  }
}
const anakin = {
  name: 'anakin skywalker',
  jedi: true,
  parents: {
    mother: {
      jedi: false,
    }
  }
}

const han = {
  name: 'han solo',
  jedi: false,
  parents: {
    father: {
      jedi: false,
    },
    mother: {
      jedi: false,
    }
  }
}
const searchChar = (character) => {
  const results = 'parents.father.jedi'.split('.').reduce((accum, next) => {
    if (accum) return accum[next];
    return false;
  }, character);
  return results;
}


[luke, anakin, han].forEach((char) => {
  console.log(char.name, '\'s father was a jedi: ', searchChar(char))
})
