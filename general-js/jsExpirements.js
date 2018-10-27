/* Global Var Expirement
function test() {
this.x = 'this should not be here';
console.log('this', this);
}
test();
console.log('global.x: ', global.x);
*/

/* Promise Expirements
  A Promise is a PROXY for a value not necessarily known,
  at the time of creating a Promise.

  It allows you to associate HANDLERS to an asynch actions,
  eventual success or failure.

  This lets asynch methods return values like synchronous methods.
  Instead of the final value,
  the asynch method returns a promise for a vlaue at some point in the future.

  A promise has 3 possible states:
  1) PENDING - Initial state. Neither fullfilled or rejected.
  2) FULLFILLED - Operation completed successfully.
  3) REJECTED - Operation failed.

  // ------------ CODE 1: new Promise ------------
    let promiseCount = 0;
    let p1 = (stuff) => new Promise((res, rej) => {
    console.log('stuff: ', stuff, ' Asynch code started');
    setTimeout(()=> {
    res(stuff)
  }, Math.random()*2000 + 1000)
  });

  testPromise = (str) => {
  p1(str)
  .then((val) => console.log('Promise fullfilled: ', val + ' hi', ' Async code terminated.'))
  .then((val) => console.log('then#2 ', val))
  .catch((err) => console.log('ERROR: ', err))
  }
  testPromise('hi toby');

  // ------------ CODE 2: Promise.all() ------------
    var p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "one");
    });
    var p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "two");
    });
    var p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "three");
    });
    var p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "four");
    });
    var p5 = new Promise((resolve, reject) => {
    reject("reject");
    });

    Promise.all([p1, p2, p3, p4])
    .then(value => {
    console.log('value: ', value);
    }, reason => {
    console.log('reason: ', reason)
    });
*/

/* CallBack Expirement
  // ------------ CODE: Custom Callback ------------
  function sayHi (err, data) {
  if (err) return console.log('error: ', err);
  return console.log('data: ', data);
}

function testCB (num, cb) {
if (typeof num !== 'number') return cb({ Error: 'this is not a number' });
return cb(null, { Success: `This is the number ${num}` });
}

testCB(5, sayHi);

setTimeout(() => {
testCB('5', sayHi)
}, 1000)
*/

/* Const Expirements
  // ------------ CODE 1: Function block ------------
  function x(){
    const hi = 'hi from x'
    console.log(hi)
  }

  // Const exp 2
  function y(){
    const hi = 'hi from y'
    console.log(hi);
  }

  x()
  y()

  // ------------ CODE 2: While block ------------
  function z() {
    const hi = 'hi from z'
    console.log(hi);

    let i = 0
    while(i < 2) {
      i++
      const hi = 'hi from while loop'
      console.log(hi);
    }
  }

  z()

  // ------------ CODE 3: Switch block ------------
  function switchEx(number) {
    switch(number) {
      case 0: {
      const hi = 'hi from case 0'
      console.log(hi)
    }; break;
    case 1: {
      const hi = 'hi from case 1'
      console.log(hi)
      }; break;
    }
  }
  switchEx(1)

*/

/* Hoisting Expirement
  // ------------ CODE ------------
  function varExp() {
  var x = 'hi'

  console.log(x)
  for(var x = 0; x < 2; x++){

  console.log(x)
}
}
varExp()
*/

/* JSON parse exp 1
  let body = '{"_id":"576db18b6594440300261e16","provider":"local","name":"Admin Jones","first_name":"Admin","legal_name":"Admin Joseph Jones","last_name":"Jones","email":"admin@admin.com","gender":"female","__v":0,"test_group":1,"program_status":"candidate","info":{"completed":false,"athleticism":1,"snoring":1},"disabled":false,"createdAt":"2016-06-24T22:17:47.144Z","verified":true,"challenges_completed":0,"prework_completed":false,"emailToken":"AqmswGoFkXz5s49V","refund":{"payments":[],"paid":0},"payments":{"repayment":{"payments":[],"paid":0},"down_payment":{"payments":[],"paid":0,"due":6000},"app_processing":{"paid":0,"due":258.5}},"bg_check":{"completed":false,"custom":false},"contracts":{"airsoft_camping_liability":{"viewed":false,"signed":false,"sent":false},"bike_release":{"viewed":false,"signed":false,"sent":false},"exercise_waiver":{"viewed":false,"signed":false,"sent":false},"use_license":{"viewed":false,"signed":false,"sent":false},"video_picture_release":{"viewed":false,"signed":false,"sent":false},"hiking_waiver":{"viewed":false,"signed":false,"sent":false},"bootcamp_agreement":{"viewed":false,"signed":false,"sent":false}},"contract_info":{"bc_agreement_fee":"2000","license_fee":"4000","down_payment":"6000","percentage":"18"},"custom_paperwork":false,"stage":"@stage-0-app-request","application":{"skills":{"html_css":1,"javascript":1,"jquery":1,"angular":1,"node":1,"express":1,"mongo":1,"react":1,"git":1,"matlab":1,"ruby":1,"python":1,"java":1,"objective_c_swift":1,"c_c_p_p":1,"php":1}},"permissions":{"editRestricted":true,"accounting":true,"grading":true,"assignment":true,"prework":true,"onboarding":true,"super":true},"role":"admin"}'


  console.log(JSON.parse(body))

  ------------ RESULT ------------
  { _id: '576db18b6594440300261e16',
    provider: 'local',s
    name: 'Admin Jones',
    first_name: 'Admin',

    legal_name: 'Admin Joseph Jones',
    last_name: 'Jones',
    email: 'admin@admin.com',
    gender: 'female',
    __v: 0,
    test_group: 1,
    program_status: 'candidate',
    info: { completed: false, athleticism: 1, snoring: 1 },
    disabled: false,
    createdAt: '2016-06-24T22:17:47.144Z',
    verified: true,
    challenges_completed: 0,
    prework_completed: false,
    emailToken: 'AqmswGoFkXz5s49V',
    refund: { payments: [], paid: 0 },
    payments:
     { repayment: { payments: [], paid: 0 },
       down_payment: { payments: [], paid: 0, due: 6000 },
       app_processing: { paid: 0, due: 258.5 } },
    bg_check: { completed: false, custom: false },
    contracts:
     { airsoft_camping_liability: { viewed: false, signed: false, sent: false },
       bike_release: { viewed: false, signed: false, sent: false },
       exercise_waiver: { viewed: false, signed: false, sent: false },
       use_license: { viewed: false, signed: false, sent: false },
       video_picture_release: { viewed: false, signed: false, sent: false },
       hiking_waiver: { viewed: false, signed: false, sent: false },
       bootcamp_agreement: { viewed: false, signed: false, sent: false } },
    contract_info:
     { bc_agreement_fee: '2000',
       license_fee: '4000',
       down_payment: '6000',
       percentage: '18' },
    custom_paperwork: false,
    stage: '@stage-0-app-request',
    application:
     { skills:
        { html_css: 1,
          javascript: 1,
          jquery: 1,
          angular: 1,
          node: 1,
          express: 1,
          mongo: 1,
          react: 1,
          git: 1,
          matlab: 1,
          ruby: 1,
          python: 1,
          java: 1,
          objective_c_swift: 1,
          c_c_p_p: 1,
          php: 1 } },
    permissions:
     { editRestricted: true,
       accounting: true,
       grading: true,
       assignment: true,
       prework: true,
       onboarding: true,
       super: true },
    role: 'admin' }
*/
