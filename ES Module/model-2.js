//Export Statement example this is a {...} of comma - separated names of code to be shared.

// Create a variable named "bestClub":
const bestClub = "Your Club";

// Create a function named "multiply":
function multiply(x, y) {
  return x * y;
}

// Create an array named "fruits":
const fruits = ["Mango", "Apple", "Orange", "Lemon"];

// Export the three statements above:
export { bestClub, multiply, fruits };

//This will throw an error because the "export" keyword is inside the function

function wrong(){
   // export let bestClubs = "Your Club";
    return bestClub;
}