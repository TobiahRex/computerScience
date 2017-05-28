import axios from 'axios';

const fetchFromGithub = async (endpoint) => {
  return await axios.get(`https://api.github.com${endpoint}`);
}

const showUserAndRepose = async (handle) => {
  try {
    const userPromise = fetchFromGithub(`/users/${handle}`);
    const userResponse = await userPromise;
    console.log('user: ', userResponse.data.name);
  } catch (e) {
    console.log('User ERROR: ', e.response.data.message);
  }
  try {
    const reposPromise = fetchFromGithub(`/users/${handle}/repos`);
    const reposResponse = await reposPromise;
    console.log('repos: ', reposResponse.data.length);
  } catch (e) {
    console.log('Repo ERROR: ', e.response.data.message);
  }

}
showUserAndRepose('adasdfasdfasdfa');
