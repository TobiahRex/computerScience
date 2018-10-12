function ex() {
  let num = 0;
  return function() {
    num += 50;
    console.log('num: ', num);
  }
}

let closure = ex();
closure();
closure();
