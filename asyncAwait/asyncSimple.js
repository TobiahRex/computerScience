import axios from 'axios';

const showGithubUser = async (handle) => {
  return await axios.get(`https://api.github.com/users/${handle}`);
}

showGithubUser('tobiahrex')
.then(({ data }) => console.log(data));
