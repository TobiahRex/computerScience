/*
  See Evernote for More Details.
*/

const HashTable = () => {
  this._storage = []  // This is known as a "Bucket"
  this._storageLimit = 12
}

// Insert prototype method.
HashTable.prototype.insert = (string, value) {
  let index = getIndexBelowMaxForKey(key, storageLimit);    

  if (this._storage.hasOwnProperty(index) === undefined){
    this._storage[index] = [[key, value]];
  } else {
    let inserted = false;
    for (let i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === key){
        this._storage[index][i][1] = value;
        inserted = true;
      }
    }
    if (inserted === false) {
      this._storage[index].push([key, value]);
    }
  }
};
