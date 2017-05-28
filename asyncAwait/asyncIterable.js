const delay = (time) => new Promise(resolve => {
  setTimeout(resolve, time);
});

async function* someGenerator() {
  await delay(1000);
  yield 1
  await delay(1000);
  yield 2
  await delay(1000);
  yield 3
}

async function main() {
  for await (const x of someGenerator()){
    console.log('x', x);
  }
}
main();
