/**
* Function: "rescursiveArrayIncrementor"
* - Expects a nested array. For each value in the array, it will increment the value by the "layer" numbere.  The "layer" numer is simply how deeply nested the array currently is.
*
* 1) Assign the value of "layerNumber" to either the recursive value, or on first call "1".
* 2)
*/

const example2 = [0, 0, [1, 1, 1, [2, 2, [3, 3, 3]]]];

const rescursiveArrayIncrementor = (array, layerNumber) => {
  let layer = layerNumber || 1;

  if (!Array.isArray(array)) {
    const result = array.map((content) => {
      if (!Array.isArray(content)) {
        content += layer;
        return content;
      }
      layer += 1;
      return rescursiveArrayIncrementor(content, layer);
    });
    return result;
  }
  throw Error(`The first argument should be an array. You passed a(n) "${typeof array}"`);
};

console.log(JSON.stringify(rescursiveArrayIncrementor(example2), null, 2));
