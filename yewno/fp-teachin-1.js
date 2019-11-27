/*
Key Words
    -
  * non-deterministic (hard to repeat the results)

- Functional Programming
  WHY
  - Declaritive | What to do (not HOW to do it)
  - deterministic (the answer is always predictable)
  - Immutability | shared state | WHY?
  - Compositional functions
  - Pure Functions

  HOW
  - map & reduce

*/

const ourTeam = [
  {
    name: 'yewno',
    team: {
      engineer1: {
        name: 'toby',
        age: 30,
      },
      engineer2: {
        name: 'joey',
        age: 25,
      },
    },
  }, {
    name: 'antColony',
    team: {
      engineer1: {
        name: 'tarik',
        age: 25,
      },
      engineer2: {
        name: 'faruk',
        age: 25,
      },
      engineer3: {
        name: 'faris',
        age: 25,
      },
      engineer4: {
        name: 'tarik',
        age: 25,
      },
      engineer5: {
        name: 'elvin',
        age: 25,
      },
      engineer6: {
        name: 'hani',
        age: 25,
      },
    }
  }
];

 // f(g(i(x)) // higher order function || composition function

const newTeam = ourTeam.reduce((acc, nTeam) => {
  let _nTeam = { ...nTeam };
  if (nTeam.name === 'yewno') {
    _nTeam.team = { ...nTeam.team };
    _nTeam.team.engineer3 = {
      name: 'santa claus',
      age: "hella old"
    };
  }
  acc.push(_nTeam);
  return acc;
}, []);

console.log('ourTeam: ', JSON.stringify(ourTeam[0], null, 2));
console.log('newTeam: ', JSON.stringify(newTeam, null, 2))
