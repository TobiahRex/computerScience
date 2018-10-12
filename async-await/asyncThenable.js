import axios from 'axios';
import bbPromise from 'bluebird';

async function main() {
  console.log('working...');
  await bbPromise.delay(2000);
  console.log('Done.');
}
main();
