import axios from 'axios';

async function fetchFromGithub(endpoint) {
  return await axios.get(`https://api.github.com${endpoint}`);
}

const showUserAndRepos = async (handle) => {
  const results = await Promise.all([
    fetchFromGithub(`/users/${handle}`),
    fetchFromGithub(`/users/${handle}/repos`),
  ])
  .catch(console.log);
  console.log(results[0].data.name);
  console.log(results[1].data.length);
}
showUserAndRepos('tobiahrex');
