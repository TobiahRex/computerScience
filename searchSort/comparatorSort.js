// getAll Properties on an object.

console.log('\n-----------Get All Properties---------------\n');
let myObj = {
  clark: 'kent',
  bruce: 'wayne',
  peter: 'parker'
}

let keys = Object.keys(myObj);
keys.forEach((key) => console.log(key, ': ', myObj[key]));

// adding two objects together.
console.log('\n---------------Add 2 object Together--------------\n');
let obj3 = {}

let obj1 = {
  tony: 'stark',
  clark: 'kent',
  bruce: 'wayne'
}

let obj2 = {
  ironman: 'tony stark',
  superman: 'clark kent',
  batman: 'bruce wayne'
}

for (let key in obj1) {
  obj3[key] = obj1[key]
};
for (let key in obj2) {
  obj3[key] = obj2[key]
}
console.log('object 3: \n', obj3);

// sorting objects by property:
console.log('\n-------------Sorting Object by Property-----------------\n');

let heroStrength = {
  ironman: 8,
  superman: 10,
  batman: 5,
  hulk: 9
}

let sortedHeros = {};
Object.keys(heroStrength).sort().forEach((hero) => {
    sortedHeros[hero] = heroStrength[hero];
});
console.log('sortedHeros: ', sortedHeros);

// sorting object by value
console.log('\n-------------Sorting Object by Property-----------------\n');

let sortedStrength = {};
let sortedKeys = Object.keys(heroStrength).sort((a, b) => heroStrength[a] - heroStrength[b]);
sortedKeys.forEach((key) => {
  sortedStrength[key] = heroStrength[key];
});
console.log('sortedStrength: ', sortedStrength);
