// // Const exp 1
// function x(){
//   const hi = 'hi from x'
//   console.log(hi)
// }

// // Const exp 2
// function y(){
//   const hi = 'hi from y'
//   console.log(hi);
// }
// x()
// y()

// // Const exp 3
// function z() {
//     const hi = 'hi from z'
//     console.log(hi);
//
//   let i = 0
//   while(i < 2) {
//     i++
//     const hi = 'hi from while loop'
//     console.log(hi);
//   }
// }
// z()

// // Const exp 4
// function switchEx(number) {
//   switch(number) {
//     case 0: {
//       const hi = 'hi from case 0'
//       console.log(hi)
//     }; break;
//     case 1: {
//       const hi = 'hi from case 1'
//       console.log(hi)
//     }; break;
//   }
// }
// switchEx(1)

// Hoisting Exp 1
// function varExp() {
//   var x = 'hi'
//
//   console.log(x)
//   for(var x = 0; x < 2; x++){
//
//     console.log(x)
//   }
// }
// varExp()

// // JSON parse exp 1
// let body = '{"_id":"576db18b6594440300261e16","provider":"local","name":"Admin Jones","first_name":"Admin","legal_name":"Admin Joseph Jones","last_name":"Jones","email":"admin@admin.com","gender":"female","__v":0,"test_group":1,"program_status":"candidate","info":{"completed":false,"athleticism":1,"snoring":1},"disabled":false,"createdAt":"2016-06-24T22:17:47.144Z","verified":true,"challenges_completed":0,"prework_completed":false,"emailToken":"AqmswGoFkXz5s49V","refund":{"payments":[],"paid":0},"payments":{"repayment":{"payments":[],"paid":0},"down_payment":{"payments":[],"paid":0,"due":6000},"app_processing":{"paid":0,"due":258.5}},"bg_check":{"completed":false,"custom":false},"contracts":{"airsoft_camping_liability":{"viewed":false,"signed":false,"sent":false},"bike_release":{"viewed":false,"signed":false,"sent":false},"exercise_waiver":{"viewed":false,"signed":false,"sent":false},"use_license":{"viewed":false,"signed":false,"sent":false},"video_picture_release":{"viewed":false,"signed":false,"sent":false},"hiking_waiver":{"viewed":false,"signed":false,"sent":false},"bootcamp_agreement":{"viewed":false,"signed":false,"sent":false}},"contract_info":{"bc_agreement_fee":"2000","license_fee":"4000","down_payment":"6000","percentage":"18"},"custom_paperwork":false,"stage":"@stage-0-app-request","application":{"skills":{"html_css":1,"javascript":1,"jquery":1,"angular":1,"node":1,"express":1,"mongo":1,"react":1,"git":1,"matlab":1,"ruby":1,"python":1,"java":1,"objective_c_swift":1,"c_c_p_p":1,"php":1}},"permissions":{"editRestricted":true,"accounting":true,"grading":true,"assignment":true,"prework":true,"onboarding":true,"super":true},"role":"admin"}'
// console.log(JSON.parse(body))
//
// { _id: '576db18b6594440300261e16',
//   provider: 'local',
//   name: 'Admin Jones',
//   first_name: 'Admin',
//
//   legal_name: 'Admin Joseph Jones',
//   last_name: 'Jones',
//   email: 'admin@admin.com',
//   gender: 'female',
//   __v: 0,
//   test_group: 1,
//   program_status: 'candidate',
//   info: { completed: false, athleticism: 1, snoring: 1 },
//   disabled: false,
//   createdAt: '2016-06-24T22:17:47.144Z',
//   verified: true,
//   challenges_completed: 0,
//   prework_completed: false,
//   emailToken: 'AqmswGoFkXz5s49V',
//   refund: { payments: [], paid: 0 },
//   payments:
//    { repayment: { payments: [], paid: 0 },
//      down_payment: { payments: [], paid: 0, due: 6000 },
//      app_processing: { paid: 0, due: 258.5 } },
//   bg_check: { completed: false, custom: false },
//   contracts:
//    { airsoft_camping_liability: { viewed: false, signed: false, sent: false },
//      bike_release: { viewed: false, signed: false, sent: false },
//      exercise_waiver: { viewed: false, signed: false, sent: false },
//      use_license: { viewed: false, signed: false, sent: false },
//      video_picture_release: { viewed: false, signed: false, sent: false },
//      hiking_waiver: { viewed: false, signed: false, sent: false },
//      bootcamp_agreement: { viewed: false, signed: false, sent: false } },
//   contract_info:
//    { bc_agreement_fee: '2000',
//      license_fee: '4000',
//      down_payment: '6000',
//      percentage: '18' },
//   custom_paperwork: false,
//   stage: '@stage-0-app-request',
//   application:
//    { skills:
//       { html_css: 1,
//         javascript: 1,
//         jquery: 1,
//         angular: 1,
//         node: 1,
//         express: 1,
//         mongo: 1,
//         react: 1,
//         git: 1,
//         matlab: 1,
//         ruby: 1,
//         python: 1,
//         java: 1,
//         objective_c_swift: 1,
//         c_c_p_p: 1,
//         php: 1 } },
//   permissions:
//    { editRestricted: true,
//      accounting: true,
//      grading: true,
//      assignment: true,
//      prework: true,
//      onboarding: true,
//      super: true },
//   role: 'admin' }
