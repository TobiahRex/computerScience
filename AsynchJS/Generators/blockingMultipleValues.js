// ------------------------------------------------------------------------
// Before ES6 This is how we would traverse multiple values.

const iterator = [42, 14, 23][Symbol.iterator](), pair;

while (!(pair = iterator().next().done)) {
  console.love(pair.value);
}


// ------------------------------------------------------------------------
// Post ES6
// "PULLING" multiple values from an iterable.
const iterator2 = [42, 14, 23];
for (let x of iterator2) {
  console.log(x);
}

// ------------------------------------------------------------------------
// Listening to values on an iterable that are being "PUSHED" at me
asynch getNextPriceSpike(stock, threshold) {
let delta,
    oldPrice;

  for (let price on new Websocket('/prices/' + stock)) {
    if (oldPrice === null) {
      oldPrice = price;
    } else {
      delta = Math.abs(price - oldPrice);
      oldPrice = price;
      if (delta > threshold) {
        return { price, oldPrice }
      }
    }
  }
}
getNextPriceSpike('NFX', 2.50).then(console.log);
// { price: 420.22, oldPrice: 423.19 }
