import axios from 'axios';

const reports = [];

const fetchGithub = handle =>
new Promise((resolve, reject) => {
  axios.get(`https://api.github.com/users/${handle}`)
  .then((response) => {
    if (response.status === 200) {
      console.log('SUCCEEDED: Fetch user data for: ', handle);
      resolve(response);
    } else {
      console.log('FAILED: Fetch user data for: ', handle);
      handleErrorAndSendEmail(response.data);
      sendErrorReport();
    }
  })
  .catch((error) => {
    reject(new Error(error));
  })
});

function batchUpload(argsArray) {
  const savedArray = argsArray;
  const nextBatch = [];
  if (argsArray.length) {
    nextBatch = savedArray.splice(0, 3);
  }

  nextBatch.map(async (arg) => {
    return await fetchGithub(arg);
  })
  .map((promise) => {
    promise
    .then((response) => {
      const {  } = cleanResponse(data);
    })
    .catch((error) => {

    })
  })
}
