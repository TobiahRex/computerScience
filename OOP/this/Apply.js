// --------------- Apply --------------- //

// --------------- Call Back use case
// Define an object with some properties and a method​
// We will later pass the method as a callback function to another function​
var clientData = {
  id: 094545,
  fullName: "Not Set",
  // setUserName is a method on the clientData object​
  setUserName: (firstName, lastName) => {
    // this refers to the fullName property in this object​
    this.fullName = firstName + " " + lastName;
  }
}

function getUserInput (firstName, lastName, callback, callbackObj) {
  // The use of the Apply method below will set the "this" value to callbackObj​
  callback.apply (callbackObj, [firstName, lastName]);
}

// The clientData object will be used by the Apply method to set the "this" value​
getUserInput ("Barack", "Obama", clientData.setUserName, clientData);
// the fullName property on the clientData was correctly set​
console.log (clientData.fullName); // Barack Obama​
