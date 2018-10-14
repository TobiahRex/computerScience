import axios from 'axios';

const fetchGithub = (handle) => axios.get(`https://api.github.com/users/${handle}`);

function* someGenerator(handles) {
  yield handles.map(async (handle) => {
    const result = await fetchGithub(handle);
    return result.data.id;
  });
}

function main() {
  return new Promise((resolve, reject) => {
    const handles = ['TobiahRex', 'landoC', 'bobbaFett', 'hanSolo', 'lukeSky', 'chewie', 'c3po', 'r2d2'];
    const x = someGenerator(handles);
    const { value, done } = x.next();
    resolve(value);
  });
}
main()
.then((value) => {
  value.map((promise) => {
    promise
    .then(result => {
      console.log({ success: true, result })
    })
    .catch(error => ({ success: false, result: { ...error }}));
  })
})
