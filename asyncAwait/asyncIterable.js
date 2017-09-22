import axios from 'axios';
import m from 'moment';

const reports = [];

const submitOrderReport = (dbReports) => {
  const message = `
    UPLOAD REPORT: ${m().format('YYYY/MM/DD')}

    ----------------- DETAILS -----------------------
    ${reports.reduce((a, n, i) => {
      return a += `
    |${i+1})------------------------
    |Date: ${n.date}
    |message: ${n.message}
    |--------------------------
  `;
    }, '')}
  `;
  console.log(message);
}

const handleErrorAndSendEmail = (error) => {
  setTimeout(() => {
    sendErrorReport();
  }, 400)
}

const sendErrorReport = () => {
  setTimeout(() => {
    const reportData = reports.pop();
    if (reportData) {
      const errorReport = `
      ERROR REPORT - ${reportData.date}
      /------------------- MESSAGE ----------------------/
      ${reportData.message}
      `;
      console.log(errorReport);
    } else {
      console.log('No errors to report.');
    }
  }, 500);
}

const cleanResponse = (response) => ({
  verified: true,
  error: false,
  data: response.data.id,
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
      sendErrorReport(response.data);
    }
  })
  .catch((badResponse) => {
    const error = badResponse.response.data.message;
    reports.push({
      date: m().format('YYYY/MM/DD'),
      message: error,
    })
    reject(error);
  })
});

function batchUpload(argsArray) {
  return new Promise((resolve) => {
    const date = m().format('YYYY/MM/DD');

    const savedArray = argsArray;
    let nextBatch = [];

    if (argsArray.length) {
      nextBatch = [...savedArray.splice(0, 3)];
      console.log('NEXT BATCH ------ ', nextBatch);
      nextBatch
      .map(async (arg) => {
        return await fetchGithub(arg);
      })
      .map((promise, i, array) => {
        promise
        .then((response) => {
          const { verified, data, error } = cleanResponse(response);
          if (verified) {
            reports.push({
              date,
              message: data,
            });
            if (i === (array.length - 1)) resolve();
          } else {
            reports.push({
              date,
              message: error,
            });
            handleErrorAndSendEmail(error);
            sendErrorReport(error);
            if (i === (array.length - 1)) resolve();
          }
        })
        .catch((error) => {
          handleErrorAndSendEmail(error);
          sendErrorReport(error);
        })
      });
      console.log('\n\n/------------- CALLING NEXT BATCH -------------/\n\n');
      console.log('savedArray: ', savedArray);
      batchUpload(savedArray);
    } else {
      console.log('No more args.');
      // submitOrderReport(reports);
    }
  });
}

const handles =  [
  // 'TobiahRex',
  // 'landoC',
  // 'bobbaFett',
  // 'hanSolo',
  // 'lukeSky',
  // 'chewie',
  // 'c3po',
  'r2d2'
];
batchUpload(handles)
.then(() => {
  console.log('FINISHED!');
  submitOrderReport(reports);
})
.catch(console.log);
