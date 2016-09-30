/*
  See Evernote for More Details.
*/

const HashTable = () => {
  this._storage = []  // This is known as a "Bucket"
  this._storageLimit = 12
}

// Insert prototype method.
HashTable.prototype.insert = function (string, value) {
  let index = getIndexBelowMaxForKey(key, storageLimit);      // convert input Key to index.

  if (this._storage.hasOwnProperty(index) === undefined){     // check for pre-existing data object at index.
    this._storage[index] = [[key, value]];                    // if none is found, then add to Bucket.
    console.log('New Data at NEW index: ', this._storage[index]);
  } else {                                                    // if a data match is found...
    let inserted = false;
    for (let i = 0; i < this._storage[index].length; i++) {   // iterate through list at index.
      if (this._storage[index][i][0] === key){                // if a match to the input key is found.
        this._storage[index][i][1] = value;                   // re-assign key to new input Value.
        console.log('Re-assigned Data at Bucket[i]: ', this._storage[index][i] );
        inserted = true;
      }
    }
    if (inserted === false) {                                 // if a match to the input key is NOT found at index...
      this._storage[index].push([key, value]);                // add it to the Bucket at the index.
      console.log('New Data at Bucket[i]: ', this._storage[index]);
    }
  }
};
console.log('HashTable: ', Hashtable);
