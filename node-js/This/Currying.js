function greet (gender, age, name) {
  // if a male, use Mr., else use Ms.​
  var salutation = gender === "male" ? "Mr. " : "Ms. ";
  ​
  if (age > 25) {
    return "Hello, " + salutation + name + ".";
  }
  else {
    return "Hey, " + name + ".";
  }
}

// So we are passing null because we are not using the "this" keyword in our greet function.​
var greetAnAdultMale = greet.bind (null, "male", 45);
​
greetAnAdultMale ("John Hartlove"); // "Hello, Mr. John Hartlove."​
​
var greetAYoungster = greet.bind (null, "", 16);
greetAYoungster ("Alex"); // "Hey, Alex."​
greetAYoungster ("Emma Waterloo"); // "Hey, Emma Waterloo."​

/*
When we use the bind () method for currying,
all the parameters of the greet () function,
except the last (rightmost) argument,
are preset.

So it is the rightmost argument that we are changing
when we call the new functions that were curried from the greet () function.
Again, I discuss currying at length in a separate blog post,
and you will see how we can easily create very powerful functions
with Currying and Compose, two Functional JavaScript concepts.

http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/
*/
