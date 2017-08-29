import axios from 'axios';
import m from 'moment';

const reports = [];

conts handleErrorAndSendEmail = (error) => {
  console.log('\nThere was an error: ', error);
  console.log('\nSending Email now.');
  setTimeout(() => {
    console.log('Email has been sent.');
  }, 400)
}

const errorReport = () => {
  console.log('\nThere was an error: ', error);
  console.log('\nSending Error report: ', reports.pop());
  setTimeout(() => {
    const reportData = reports.pop();
    const errorReport = `
      ERROR REPORT - ${reportData.date}
      /-----------------------------------------/
      Details:
      ${reportData.message}
    `;
  }, 500);
}

const cleanResponse = (response) => ({
  verified: true,
  error: false,
  data: response.data,
});

const fetchGithub = handle =>
new Promise((resolve, reject) => {
  axios.get(`https://api.github.com/users/${handle}`)
  .then((response) => {
    if (response.status === 200) {
      console.log('SUCCEEDED: Fetch user data for: ', handle);
      resolve(response);
    } else {
      console.log('FAILED: Fetch user data for: ', handle);
      reports.push({
        date: m().format('YYYY/MM/DD'),
        message: 'Was unable to fetch Github data.',
      });
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
      const { verified, data, error } = cleanResponse(data);
      if (verified) {

      } else {
        handleErrorAndSendEmail(error);
        sendErrorReport(error);
      }
    })
    .catch((error) => {

    })
  })
}
