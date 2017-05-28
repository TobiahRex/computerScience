import axios from 'axios';

const fetchUser = async (handle) => {
  try {
    const { data } = await axios.get(`https://api.github.com/users/${handle}`);
    console.log('data: ', data);
  } catch (err) {
    console.log('ERROR: ', err.response.data.message);
  }
}
fetchUser('asdfas;lkjasdf');
