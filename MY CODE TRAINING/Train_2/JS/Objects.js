https://slides.com/leonnoel/100devs2-more-javascript-objects
// Constructor

function MakeCar(carMake, carModel, carColor, numOfDoors) {
  this.make = carMake
  this.model = carModel
  this.color = carColor
  this.doors = numOfDoors
  this.honk = function () {
    alert('BEEP BEEP FUCKER')
  }
  this.lock = function () {
    alert(`Locked ${this.doors} doors!`)
  }
}

let hondaCivic = new MakeCar('Honda', 'Civic', 'Silver', 4)

let teslaRoadster = new MakeCar('Tesla', 'Roadster', 'Red', 2)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Object Oriented Programming
// "object literal {}" is a simple way to define an object 
const square = {
  sides: 4,
  location: {
    x:2,
    y:2
  },
  draw:function() {
    console.log('draw');
  }
};
square.draw();
//there is 3 members in this square object:
//sides, location, draw
//if a "member" is a function it's a "method"
//sides, location are "properties"
//NOTE: all members whether functions or properties are technically "properties"

//in OOP properties and methods are fundamentally different, because a property is used to hold values, a function or method is used to define some logic.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// OOP "factory function" of the above code, also used to create a object
function createSquares(sides) {
  return {
    sides,
    draw: function() {
      console.log('draw');
    }
  };
  
}
const squares = createSquares(4);
square.draw();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// OOP "constructor function" of the above code
function CreateSquares(sides) {
  this.sides = sides;
  this.draw = function() {
    console.log('draw');
  }
}
const another = new CreateSquares(4);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//here are some other built in object constructors in JavaScript
new String(); // '', "", `` - these are string literals
new Boolean(); // true, false - Boolean literals
new Number(); // 1, 2, 3, etc - Number literals

//Every object has a constructor property and that references the function that was used to create an object

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//JavaScript has two categories of type
//Value types also called primitives: Number, String, Boolean, Symbol, undefined, null

//Reference types: Objects, Functions, Arrays
//NOTE: Functions are Objects, so in JavaScript you have Primitives and Objects but they behave differently. Primitives are copied by their "value". Objects are copied by their "reference"

//example of copied by value:
//q and b are two independent variables
let q = 47; //value 47 is stored in q
let b = q; //value 47 copied is stored in b

q = 48; 

/////////////////////////////////////////////////////////////////

let number = 20;

function increase(number) {
  number++;
}

increase(number);
console.log(number); //20
////////////////////////////////////////////////////////////////

//example of copied by reference:
let obj = { value: 20};

function increase(obj) {
  obj.value++;
}

increase(obj); //calling increase and "obj" is passed by it's reference, this is being referenced from where it is  defined on line 98, two variables pointing to the same object.
console.log(obj); //21
/////////////////////////////////////////////////////////////////
let q = { value: 47}; // this obj {value:47} is not stored in q, it's stored somewhere in the memory, the address is stored in the variable q
let b = q; //so when you copy q into b it is the address of the reference that we copied

x.value = 48;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Adding and Removing Properties
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}
const circle = new Circle(47);

circle.location = {x: 1}; //these two are the same but different syntax
circle['location'] = {x: 1};

delete circle['location']; //this removes the properties

// Adding and Deleting properties
//add the property to an object by simply giving it a value.
//below "husband" is the added property and value is given directly.

let brooklynNineNine = {
  name: 'Raymond Holt',
  currentRole: 'Captain of brooklyn99',
}
brooklynNineNine.husband = 'Kevin' // Or brooklynNineNine['husband'] = 'Kevin'

console.log(brooklynNineNine)

//deleting property from an Object:
//the delete keyword deletes both the value of the property and the property itself. Once deleted the property can not be used before it's added back again.
let brooklynNineNine = {
  name: 'Amy Santiago',
  currentRole: 'Detective brooklyn99',
  husband: 'Jake Peralta',
  mentor: 'Raymond Holt'
}

delete brooklynNineNine.mentor;

console.log(brooklynNineNine)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Enumerating Properties
function Triangle(sides){
  this.sides = sides;
  this.draw = function(){
    console.log('draw');
  }
}

const Triangle = new Triangle(3);

for (let key in Triangle) {   //to enumerate all the members in a Object this is a "for-in Loop"
  if (typeof Triangle[key] !== 'function')
    console.log(key, Triangle[key]);
}

const keys = Object.keys(Triangle); //this is to get all the keys "Object.keys"
console.log(keys);

if ('sides' in Triangle)  //to check for an existence of a property or a method in a Object, this is the "in operator"
  console.log('Triangle has three sides');

///////////////////////////////////////////////////////////////////////////////////////////////////////

// Abstraction
//Hide the details and show the essentials
function Rectangle(side){ //show this
  this.side = side;
  this.defaultLocation = { x: 0, y: 0}; //this should be hidden from the consumer of this Object
  this.computerOptimumLocation = function(){  //this should be hidden, for these are implementation details
    //
  }
  this.draw = function(){ //show this
    this.computerOptimumLocation();
    console.log('draw');
  }
}
const Rectangle = new Triangle(4);
Triangle.defaultLocation = false;

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// Private Properties and Methods
function Circle(radius){   //function one
  this.radius = radius;
  let.defaultLocation = {x: 1, y:1};    //this is a local variable
  let computerOptimumLocation = function(factor) {  //this i a private method
    //...
  }
  this.draw = function () {   //function two/ function in a function
    computerOptimumLocation(0.1);

    console.log('draw');
  };
}
const Circle = new Circle(20);
Circle.draw();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Getters/Setters
function Circle(radius) { 
  this.radius = radius;
  let.defaultLocation = { x: 1, y: 1 };
  this.getDefaultLocation = function(){   //this allows you to read the defaultLocation
    return defaultLocation;
  }
  this.draw = function () {   

    console.log('draw');
  };  //Object.defineProperty define getters/setters
  Object.defineProperty(this, 'defaultLocation', {get: function(){
      return defaultLocation;
  },  set: function(value){
        if (!value.x || !value.y)
        throw new Error('Invalid Location');
        defaultLocation = value;
  }
 });
}
const Circle = new Circle(20);
Circle.defaultLocation = 1;
Circle.draw();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Exercise Stop Watch
function Stopwatch(){
  let startTime, endTime, running, duration = ;
  this.start = function() {
    if (running)
    throw new Error('Stopwatch has already started.');
    running = true;
    startTime = new Date();
  };
  this.stop = function() {
    if(!running)
    throw new Error('Stopwatch is not started.');
    running = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000; duration += seconds;
  };
  this.reset = function(){
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };
  Object.defineProperty(this, 'duration', {
    get: function() {return duration;}
  });
}