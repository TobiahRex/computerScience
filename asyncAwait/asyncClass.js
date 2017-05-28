import axios from 'axios';

class GithubClient {
  async fetchUser(handle) {
    const response = await axios.get(`http://api.github.com/users/${handle}`);
  }
}

(async () => {
  const client = new GithubClient();
  const response = await client.fetchUser('asdfazzxcvweq');
  response.then(({ data }) => console.log('data', data))
  .catch(console.log)
})();
