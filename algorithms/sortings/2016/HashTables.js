/*
  See Evernote for More Details.
*/

const HashTable = function() {
  this._storage = []  // This is known as a "Bucket"
  this._storageLimit = 12
};

HashTable.prototype.getIndex = (s, max) => {
  // if (typeof s !== 'string') s = JSON.stringify(s);
  // var hash = 0;
  // for (var i = 0; i < s.length; i++) {
  //   hash = ((hash << 5) - hash) + s.charCodeAt(i);
  //   hash &= hash; // Keep it a 32bit int
  // }
  // return hash;
  if (typeof s !== 'string') s = JSON.stringify(s);   // input type check.
  let hash = 0;
  for (let i = 0; i < str.length; i++){
    hash = (hash << 5) + hash + str.charcodeAt(i);
    hash = hash & hash; // Convert to a 32 bit int;
    hash = Math.abs(hash);
  }
  return hash % max;
};


HashTable.prototype.get = (key) => {
  var i = this._position(key);
  var node;
  if ((node = this._findInList(this._table[i], key))) {
    return node.value.v;
  }
  return undefined;
};



// Insert prototype method.
HashTable.prototype.insert = (string, value) => {

  // convert input Key to index.
  let index = HashTable.prototype.getIndex(string, storageLimit);

  // check for pre-existing data object at index.
  if (this._storage.hasOwnProperty(index) === undefined){

    // if none is found, then add to Bucket.
    this._storage[index] = [[key, value]];
    console.log('New Data at NEW index: ', this._storage[index]);

    // if a data match is found...
  } else {
    let inserted = false;

    // iterate through list at index.
    for (let i = 0; i < this._storage[index].length; i++) {
      // if a match to the input key is found.
      if (this._storage[index][i][0] === key){

        // re-assign key to new input Value.
        this._storage[index][i][1] = value;
        console.log('Re-assigned Data at Bucket[i]: ', this._storage[index][i]);
        inserted = true;
      }
    }
    // if a match to the input key is NOT found at index...
    if (inserted === false) {

      // add it to the Bucket at the index.
      this._storage[index].push([key, value]);
      console.log('New Data at Bucket[i]: ', this._storage[index]);
    }
  }
};
// console.log('HashTable: ', HashTable.prototype.insert());
console.log('Hashed index: ', HashTable.prototype.getIndex('Toby', 12));
