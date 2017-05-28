import axios from 'axios';

class GithubClient {
  async fetchUser(handle) {
    return await axios.get(`http://api.github.com/users/${handle}`);
  }
}

(async () => {
  const client = new GithubClient();
  const { data } = await client.fetchUser('tobiahrex');
  console.log(data);
})();
