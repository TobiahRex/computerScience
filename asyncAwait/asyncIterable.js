import axios from 'axios';

const fetchGithub = (handle) => axios.get(`https://api.github.com/users/${handle}`);

async function* someGenerator(handles) {
  yield handles.map(async (handle) => {
    const result = await fetchGithub(handle);
    return result.data.id;
  });s
}

async function main() {
  const handles = ['TobiahRex', 'aaa', 'bbb'];
  for await (const x of someGenerator(handles)){
    console.log('x', x);
    x.forEach((promise) => {
      promise
      .then((result) => {
        console.log('result: ', result);
      })
      .catch(console.log);
    })
  }
}
main();

// async function main2() {
//   const generator = someGenerator([
//     'tobiahRex'
//   ]);
//   while(true) {
//     const { value, done } = await generator.next();
//     if (done) break;
//     console.log(value);
//   }
// }
// main2();
