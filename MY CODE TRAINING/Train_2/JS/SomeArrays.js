//Write (function bmi) that (calculates) (body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

// function bmi(weight, height) {
//   let result = weight / Math.pow(height, 2)

//   if (result <= 18.5) {
//     return "Underweight";
//   } else if (result <= 25) {
//     return "Normal";
//   } else if (result <= 30) {
//     return "Overweight";
//   } else {
//     return "Obese";
//   }
// }

// this is an liter version of the above
// function bmi(weight, height) {
//   let result = weight / (Math.pow(height, 2));
//   if (result <= 18.5) return 'Underweight'
//   else if (result <= 25) return 'Normal'
//   else if (result <= 30) return 'Overweight'
//   else return 'Obese';
// }

// the for loop, the forEach() method or the newer for-of loop
// for (let i = 0; i < myArray.length; i++) {
//   // Use myArray[i] to access each array element one by one
// }

// myArray.forEach(myElement => {
//   // Use myElement to access each array element one by one
// });

// for (const myElement of myArray) {
//   // Use myElement to access each array element one by one
// }

// examples of variables turned into an object to an Array
const movie1 = "Belly";
const movie2 = "BadBoys";
const movie3 = "JohnWick";

const movies = {
  movie1: "Belly",
  movie2: "BadBoys",
  movie3: "JohnWick",
};

const movies = ["Belly", "BadBoys", "JohnWick"];
// everything within the brackets makes up the Array
// below an Array with different element types
const elements = ["Action", 3, true];

// this .length helps you get the size of the Array
const sportBalls = ["football", "basketball", "baseball"];
console.log(sportBalls.length);

const dogTypes = ["GermanShepherd", "PittBull", "Poodle", "Doberman", "StanfordTerrier"];
console.log(dogs.length)

// 1st elements always start at 0 index, index size is the last element minus 1
// index:       [0]                [1]         [2]       [3]         [4]
const dogs = ["GermanShepherd", "PittBull", "Poodle", "Doberman", "StanfordTerrier"];
console.log(dogs.length)

// this is accessing elements via their [square brackets]
const wildCats = ["Lion", "Panther", "Cheetah", "Puma"];
console.log( wildCats[2]);
console.log(1);
console.log(2);
console.log(3);

// this below is an nested array to grab
Arr = [1, [1, 2, "345"], 3]
Arr[1]will grab the whole thing
Arr[0,1,2]will grab the inner arrays
Arr[2]will grab the 3

// this is a method and arrow function
const wildCats = ["Lion", "Panther", "Cheetah", "Puma"];
wildCats.forEach(wildCat => {
  console.log(wildCat);
});

// this for of loop is a special kind of loop dealing with iterable objects
for (const myElement of myArray) {
  // Use myElement to access each array element one by one
}
const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
for (const movie of movies) {
  console.log(movie);
}

// extraction from a string in array
function removeChar(str) {
  let string = 'Morning'
  firstChar = string[0]
  lastChar = string[string.length - 1]
  console.log(firstChar, lastChar)
};

// just simplify it actually to
function removeChar(str) {
  let string = 'Morning'
  console.log(string[0], string[string.length - 1])
};
// another extraction for a string, but simple one
let string = 'morning'
console.log(string.slice(1, -1))

function removeChar(str) {
  return str.slice(1, -1);
}

let string1 = 'Lorenzo'
console.log(string1.slice(2, -2))

// reduce but grow
function grow(x) {
  let outPut = 1; 
  for (let i = 0; i < x.length; i++) {
    outPut = outPut * x[i];
  }
  return outPut;

}
// declaring Arrays (Array Constructor)
let newArr = new Array()
// declaring Arrays (Literal Notation)
let newArr = []
// declaring Arrays (are populated with elements of any type)
newArr = ['Code', true, 47]

// Object Constructor
function MakeCar(carMake, carModel, carColor, numOfDoors) {
  this.make = carMake
  this.model = carModel
  this.color = carColor
  this.doors = numOfDoors
  this.honk = function () {
    alert('BEEP BEEP HORNER')
  }
  this.lock = function () {
    alert(`Locked ${this.doors} doors!`)
  }
}

let hondaCivic = new MakeCar('Honda', 'Civic', 'Silver', 4)

let teslaRoadster = new MakeCar('Tesla', 'Roadster', 'Red', 2)

// A prototype is another object that is used as a fallback source of properties
let teslaRoadster = new MakeCar('Tesla', 'Roadster', 'Red', 2)

console.log(teslaRoadster.bluetooth)  //undefined

MakeCar.prototype.bluetooth = true

console.log(teslaRoadster.bluetooth) //true 

// Why does .toString()work?!?
let teslaRoadster = new MakeCar('Tesla', 'Roadster', 'Red', 2)

console.log(teslaRoadster.doors.toString())  // "2" not 2

// Classes are like templates for objects!
class MakeCar {
  constructor(carMake, carModel, carColor, numOfDoors) {
    this.make = carMake
    this.model = carModel
    this.color = carColor
    this.doors = numOfDoors
  }
  honk() {
    alert('BEEP BEEP FUCKER')
  }
  lock() {
    alert(`Locked ${this.doors} doors!`)
  }
}

let hondaCivic = new MakeCar('Honda', 'Civic', 'Silver', 4)

let teslaRoadster = new MakeCar('Tesla', 'Roadster', 'Red', 2)

// API returns a JSON object that we can use within our apps
fetch("https://dog.ceo/api/breeds/image/random")
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(`error ${err}`)
  });

  // Some APIs need Query Parameters to return the correct data
fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(`error ${err}`)
  });

  /////////////////////////////////////////////////////////////////
  // Store Data in Arrays
  // An array represents a list of elements.A JavaScript array is an object that has special properties, like length to access its size(number of elements).
  //  think of an array as a set of boxes, each storing a specific value and associated with a number called its index.The first element of an array will be index number 0 - not 1.
  //  You can access a particular element by passing its index within square brackets[].
  //  To iterate over an array(browsing it element by element), you can use the for loop, the forEach() method or the newer for-of loop.

for (let i = 0; i < myArray.length; i++) {
  // Use myArray[i] to access each array element one by one
}

myArray.forEach(myElement => {
  // Use myElement to access each array element one by one
});

for (const myElement of myArray) {
  // Use myElement to access each array element one by one
}

// The push() method adds an element at the end of an array.The unshift() method adds it at the beginning.

// The pop() and splice() are used to remove elements from the array.

///////////////////////////////////////////////////////////////////

// Introduction to arrays
// Imagine you want to create a list of all the movies you've seen this year.
// One solution would be to create several variables:

const movie1 = "The Wolf of Wall Street";
const movie2 = "Zootopia";
const movie3 = "Babysitting";
// ...

// Another possibility is to group the movies in an object.

const movies = {
  movie1: "The Wolf of Wall Street",
  movie2: "Zootopia",
  movie3: "Babysitting",
  // ...
};

// This time, the data is centralized in the object movies.The names of its properties(movie1, movie2, movie3...) are, however, unnecessary and repetitive.
// You need a solution to store items together without naming them individually!
// Luckily, there is indeed a solution: use an array.An array is a data type that can store a set of elements.

///////////////////////////////////////////////////////////////////

// Manipulating arrays in JavaScript
// In JavaScript, an array is an object that has special properties.

///////////////////////////////////////////////////////////////////

// Creating an array
// Here's how to create our list of movies in the form of an array.

const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];

// An array is created with a pair of square brackets[].Everything within the brackets makes up the array.

// You can store different types of elements within an array, including strings, numbers, booleans and even objects.

const elements = ["Hello", 7, { message: "Hi mom" }, true];

// Since an array may contain multiple elements, it's good to name the array plurally (for example, movies).

///////////////////////////////////////////////////////////////////

// Obtaining an array's size
// The number of elements stored in an array is called its size.Here's how to access it.

const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
console.log(movies.length); // 3

// You access the size of an array via its length property, using the dot notation.
// Of course, this length property returns 0 in case of an empty array.

const emptyArray = []; // Create an empty array
console.log(emptyArray.length); // 0

///////////////////////////////////////////////////////////////////

// Access an element in an array
// Each item in an array is identified by a number called its index - an integer pointer that identifies an element of the array.We can think of an array as a set of boxes, each storing a specific value and associated with an index.Here's the trick: the first element of an array will be index number 0 - not 1. The second element will be index number 1, and so on. The index of the last array element would be the array's size minus 1.

// Here is how you might represent the movies array:

Index         0                 1                 2
Value  TheWolfofWallStreet    Zootopia         Babysitting

// You can access a particular element by passing its index within square brackets[]:

const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
console.log(movies[0]); // "The Wolf of Wall Street"
console.log(movies[1]); // "Zootopia"
console.log(movies[2]); // "Babysitting"

// Using an invalid index to access a JavaScript array element returns the value undefined.

const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
console.log(movies[3]); // undefined: last element is at index 2

///////////////////////////////////////////////////////////////////

// Iterating over an array
// There are several ways to browse an array element by element.
// The first is to use a for loop as discussed previously.

const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
}

// The for loop runs through each element in the array starting with index 0 all the way up to the length of the array minus 1, which is its last element.
// Another way is to call the forEach() method on the array.It takes as a parameter a function that will be applied to each array element.

myArray.forEach(myElement => {
  // Use myElement to access each array element one by one
});

// Here's the previous example, rewritten with this method and a fat arrow function.

const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
movies.forEach(movie => {
  console.log(movie);
});

// // During execution, each array element is passed as a parameter(named movie in this example) to the anonymous function associated to forEach().
// Lastly, you can use the for-of loop, a special kind of loop dealing with iterable objects like arrays.Here is its syntax.

for (const myElement of myArray) {
  // Use myElement to access each array element one by one
}

// Check out the previous example written with a for-of loop

const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
for (const movie of movies) {
  console.log(movie);
}

///////////////////////////////////////////////////////////////////

// Updating an array's content
// Adding an element to an array
// Don't lie to me: you've just watched Ghostbusters yet another time.Let's add it to the list. Here's how you'd do so.

const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
movies.push("Ghostbusters");
console.log(movies[3]); // "Ghostbusters"

// You add a new item to an array with the push() method.The new element to be added is passed as a parameter to the method.It is inserted at the end of the array.
// To add an element at the beginning of an array, use the unshift() method instead of push().

const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
movies.unshift("Pacific Rim");
console.log(movies[0]); // "Pacific Rim"

///////////////////////////////////////////////////////////////////

// Removing an element from an array
// You can remove the last element of an array using the pop() method.

const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
movies.pop(); // Remove the last array element
console.log(movies.length); // 2
console.log(movies[2]); // undefined

// Alternatively, you can use the splice() method with two parameters: the first one is the index from which to begin removing, and the second one is the number of elements to remove.

const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
movies.splice(0, 1); // Remove 1 element starting at index 0
console.log(movies.length); // 2
console.log(movies[0]); // "Zootopia"
console.log(movies[1]); // "Babysitting"

// Coding time!
// Create all these programs in a generic fashion: the program output should reflect any update in the array's content.

// Musketeers
// Write a program that:

// Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
// Shows each array element using a for loop.
// Adds the "D'Artagnan" value to the array.
// Shows each array element using the forEach() method.
// Remove poor Aramis.
// Shows each array element using a for-of loop.

// Sum of values
// Write a program that creates the following array, then calculates and shows the sum of its values(42 in that case).

const values = [3, 11, 7, 2, 9, 10];

// Array maximum
// Write a program that creates the following array, then calculates and shows the array's maximum value.

const values = [3, 11, 7, 2, 9, 10];

// List of words
// Write a program that asks the user for a word until the user types "stop".The program then shows each of these words, except "stop".

