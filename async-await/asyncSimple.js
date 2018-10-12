import axios from 'axios';

const showGithubUser = async (handle) => {
  const response = await axios.get(`https://api.github.com/users/${handle}`);
  if (response.status !== 200) throw Error(response);
  return response;
}

showGithubUser('asdf;lkjasdf')
.then(({ data }) => console.log(data))
.catch((err) => console.log('ERROR: ', err.response.data.message))
