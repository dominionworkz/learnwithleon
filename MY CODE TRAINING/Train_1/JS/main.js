// Testing the "variable"-a variable is a box for data, with a unique name on the box/ with "let" keyword

let message = "What's Up"; 
alert (message);

let myName = 'Quincy', age = 47, dob = 1974;

let myNameIs = 'LBulla',
    currentAge = 47,
    bornDay = 1974;

// Declare two variables: admin and name.
let admin, name;
// Assign the value "John" to name.
let MyNameIs = "John";
// Copy the value from name to admin.
let adminIs = "John";
// Show the value of admin using alert (must output “John”).
alert ("John");

// Create a variable with the name of our planet. How would you name such a variable?
let ourPlanetName = "Earth";
// Create a variable to store the name of a current visitor to a website. How would you name that variable?
let currentVisitorName = "Mike";

const BIRTHDAY = '09/15/83';
const AGE = someAge(BIRTHDAY); 

// Rewrite with arrow functions
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask (
  "Do you agree?",
  function() {alert("You agreed."); },
  function() {alert("You canceled the execution."); }
);
// Rewritten for the function above
ask(
  "Do you agree?",
() => alert ("You agreed."),
() => alert("You canceled the execution.")
);

// The following function returns true if the parameter age is greater than 18. Otherwise it asks for a confirmation and returns its result:
// Will the function work differently if else is removed? Is there any difference in the behavior of these two variants?
function checkAge(age) {
  if (age > 18) {
    return true;
  }else {
    return confirm('Did parents allow you?');     
  }
} 
function checkAge (age) {
  if (age > 18){
    return true;  
  }
    return confirm('Did parents allow you?');  
} 

// The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result.
// Rewrite it, to perform the same, but without if, in a single line.
// Make two variants of checkAge:
// Using a question mark operator ?
// Using OR ||

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }
function checkAge (age){
  if (age > 18){
    return true;
  } else{
    return confirm('Did parents allow you?');
  }
}