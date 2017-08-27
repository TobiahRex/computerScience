import axios from 'axios';

const fetchGithub = (handle) => axios.get(`https://api.github.com/users/${handle}`);

function* someGenerator(handles) {
  yield handles.map(async (handle) => {
    const result = await fetchGithub(handle);
    return result.data.id;
  });
}

function main() {
  const handles = ['TobiahRex', 'aaa', 'bbb'];
  const x = someGenerator(handles);
  const { value, done } = x.next();

  value.forEach((promise) => {
    promise.then((result) => {
      console.log('result: ', result);
    })
    .catch(console.log);
  })
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
