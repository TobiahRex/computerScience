const someFunction = (valuePassedIn) => {
 //Check to see if there is a caching object on the function.
 //If not,make one.
 someFunction.objToCacheTo = someFunction.objToCacheTo || {}
 //Check to see if the object's key is equal to the passed in
 //value. Remember, we need to run the same input with the same
 //function to get the same output. If the key is not equal, then we
 //go ahead to perform whatever work needs to be done. In this case,
 //a simple calculation
 if(!someFunction.objToCacheTo[valuePassedIn]) {
      let calculation = valuePassedIn + 1000
      someFunction.objToCacheTo[valuePassedIn] = calculation
      return someFunction.objToCacheTo[valuePassedIn]
  }
 //return the value stored in the caching obj (.objToCacheTo)
 return someFunction.objToCacheTo[valuePassedIn]
}
someFunction(3)
console.log(someFunction)
