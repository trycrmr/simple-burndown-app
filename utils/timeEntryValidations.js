let async = require('asyncawait/async');
let await = require('asyncawait/await');

let validations = async((obj) => {
  return new Promise((resolve, reject) => {
    let allPropsPass = false,
    doesTimePass = false,
    doesDatePass = false,
    doesPersonPass = false,
    doesProjectPass = false,
    doesTypePass = false,
    failureReasons = [],
    validationsPerformed = 0;

    for(let prop in obj) {
      switch(prop) {
        case 'time':
          validationsPerformed++
          if((typeof data === 'number' && (data%1) === 0) // is integer check
            && obj.time <= 24) {
            doesTimePass = true
          } else {
            let timeFailureReason = obj.time <= 24 ? 'Time entered is not an integer. Please enter an integer.' : 'Time enter is greater than 24. There is no way to work more than 24 hours in the day. Please enter less than 24 hours.' 
            failureReasons.push(timeFailureReason)
          }
          break;
        case 'date':
          validationsPerformed++
          let timestamp = Date.parse(obj.date)
          if (isNaN(timestamp) == false){
            doesDatePass = true
          } else {
            failureReasons.push('String representing a date is not able to be parsed as a date.')
          }
          break;
        case 'person':
          validationsPerformed++
          doesPersonPass = true;
          break; 
        case 'project':
          validationsPerformed++
          doesProjectPass = true;
          break; 
        case 'type':
          validationsPerformed++
          if(obj.type.toLowerCase() == 'actual' || 
            obj.type.toLowerCase() == 'ideal' || 
            obj.type.toLowerCase() == 'expected') {
            doesTypePass = true
          } else {
            failureReasons.push('Type is not "actual", "ideal", or "expected". Please enter one of those three values.');
          }
          break; 
        default: 
          console.log(`Ignoring ${obj.type}. There are no checks to perform for ${obj.type}.`);
      }
    }
    // if(doesTypePass && doesProjectPass && doesPersonPass && doesTimePass && doesDatePass) {
    if(failureReasons.length > 0) {
      console.log('validationsPerformed', validationsPerformed)
      resolve(failureReasons)
    } else {
      console.log('validationsPerformed', validationsPerformed)
      resolve(failureReasons)
    }
  })
})

module.exports = validations;