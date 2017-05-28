import axios from 'axios';

const showGithubUser = (handle) => {
  axios.get(`https://api.github.com/users/${handle}`)
  .then(({ data }) => console.log(data))
  .catch(console.error);
}

showGithubUser('tobiahrex');
