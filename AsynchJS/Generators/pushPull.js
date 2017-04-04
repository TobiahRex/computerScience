function * getStockPrice(name) {
  const symbol = yield getStockSymbol(name);
  const price = yield getSymbolPrice(symbol);
  return price;
}

function spawn(generator) {  // { value: 'NFX', done: false }
  return new Promise(resolve, reject) {

    function onResult(lastResult) {
      const { value, done } = generator.next(lastResult);

      if (!done) {
        value.then(onResult, reject);
      } else {
        resolve(value);
      }
    }
    onResult();

  }
}

spawn(getStockPrice('Netflix')).then(console.log);
/*
Here I have "getStockPrice", and then I have this spawn function which consumes it.  So, notice at the bottom I'm calling spawn, but I'm passing in the generator that comes out of getStockPrice into spawn.  And what's going to come out of that is a promise that's eventually going to resolve to the final price of that stock.

So I run this, and what happens is that I immediately create a promise, and execution then runs to the very bottom (line 19) and hits this onResult function.  And this onResult function is just basically my way of looping, and continuing to resolve promises.  You're going to see me recursively call this function again and again every single tim I get a new value out of a promise.

So we go up here, first time around, the last result is undefined because I haven't gotten any promises yet.  As soon as I call next, notice up at the top, execution stops at the first yield and we return a promise that symbolizes the eventual stock symbol.  And that get's returned to the consumer.  If it's a promise, the consumer calls then on it.  And notice here we're passing in the onResult function we started with, except this time when we call onResult, it's going to get the result of that promise.

So as soon as I do this, we're going to hop back up here, and the last promise result is going to be whatever came out of that promise. NFX.

So now I got the result of the promise as a produce but I want to push it back into the producer, so I call next, and pass back in JNJ as the argument, and if you look back up at the top, notice what happens to the yield symbol promise expression...it gets replaced with JNJ and the execution resumes and stops at the next yield point.

So get symbol price is a promise that eventually resolves to the price.  That's what comes out ot the consumer.  Another promise.  We call then on it again.  Pass in onResult.  That recursively gets resolved to the next promise, which is the price. And we do it all over again.

We call next, yield get's replaced with that price, and then we continue on to the very end of the generator function at which point it comes out and says, "you know what?" Done is true.  We're not going to get any more values.  Consumer takes that, doesn't need to resolve it, it's not a promise. And then resolves the overall promise that was returned from spawn, to that final value. 
*/
