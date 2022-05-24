///////////////////////////////////////////////////////////////////
// JavaScript Array Method Cheat Sheet(17 must - know methods)
// In JavaScript, all arrays are constructed from the global Array class. All array methods are stored in the Array.prototype object.
// This means that array methods are shared between array instances via prototypal inheritance.
///////////////////////////////////////////////////////////////////

// Array.prototype.toString
// Converts an array into a string of comma - separated array values:
let names = ["Zoe", "Adam", "Dan"]

let strNames = names.toString() // Zoe,Adam,Dan

///////////////////////////////////////////////////////////////////

// Array.prototype.join
// Similar to toString, but you can specify the separator:
let names = ["Zoe", "Adam", "Dan"]

let strNames = names.join(" and ") // Zoe and Adam and Dan

///////////////////////////////////////////////////////////////////

// Array.prototype.concat
// Create a new array by concatenating existing arrays:
let nums = [1, 2, 3]
let nums2 = [4, 5, 6]
let nums3 = [7, 8, 9]

let concatArr = nums.concat(nums2, nums3)
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

///////////////////////////////////////////////////////////////////

// Array.prototype.splice
// The splice() method can be used to add new items to an array:
let arr = ["Danny", "Joe"]

arr.splice(1, 0, "Alice", "Amy")

console.log(arr) // ['Danny', 'Alice', 'Amy', 'Joe']

// The first parameter(1) defines the index from where the new elements should be added(spliced in).
// The second parameter(0) defines how many elements should be removed.
// The rest of the parameters('Alice', 'Amy') define the new elements to be added.

// splice() returns an array with the deleted items:
let arr = ["Danny", "Joe"]

let spliced = arr.splice(1, 1, "Alice", "Amy") // ['Joe']

console.log(arr) // ['Danny', 'Alice', 'Amy']

// We can also delete items without adding any new ones:
let arr = ["Danny", "Joe", "Amy"]

let spliced = arr.splice(1, 1) // ['Joe']

console.log(arr) // ['Danny', 'Amy']

// Since splice() mutates the original array, it is often best to make a copy of it before splicing.

///////////////////////////////////////////////////////////////////

// Array.prototype.slice
// slice() slices out a piece of an array, and returns it in a new array:
let arr = ["Danny", "Joe", "Amy"]

let slice = arr.slice(1) // ['Joe', 'Amy']

// Above, we are slicing from the element at index 1. slice() does not mutate the original array.

// We can provide a start and end index to splice from(up to but not including end index):

let arr = ["Danny", "Joe", "Amy"]

let slice = arr.slice(0, 2) // ['Danny', 'Joe']

///////////////////////////////////////////////////////////////////

// Array.prototype.indexOf
// Find the first index that contains a certain value(searches from left to right):
let arr = ["Danny", "Joe", "Amy", "Joe"]

let index = arr.indexOf("Joe") // 1

///////////////////////////////////////////////////////////////////

// Array.prototype.lastIndexOf
// Find the last index that contains a certain value(searches from right to left):
let arr = ["Danny", "Joe", "Amy", "Joe"]

let index = arr.lastIndexOf("Joe") // 3

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
// Higher - order array methods in JavaScript
// A higher - order function is a function that accepts functions as arguments, and / or returns a function.So, higher - order functions are functions that operate on other functions.
// In JavaScript, these methods are shared between array instances via prototypal inheritance from Array.prototype.

// Array.prototype.forEach
// The forEach method is basically just a shorter way of writing for (let i = 0; i < arr.length; i++) {... }.
// It loops through the given array, and calls the given call - back function for each of the elements in the array.
// The call - back passed to the forEach() function can accept any of the three arguments: the item value, the item index, the array itself.
let numbers = [1, 2, 3, 4]

numbers.forEach(n => console.log(n))
// 1
// 2
// 3
// 4

///////////////////////////////////////////////////////////////////

// Array.prototype.map
// The map function takes in a call - back function as argument, and executes that function on each element of the array it is working on.It maps each of the return values of the call - back into a new array.It does not mutate the original array.
// // The call - back passed to the map() function can accept any of the three arguments: the item value, the item index, the array itself.
let numbers = [1, 2, 3, 4]

// Double all numbers
let doubledNumbers = numbers.map(n => n * 2) // [2, 4, 6, 8]

// Only double numbers at odd indexes
let doubledOddIndexNumbers = numbers.map((n, i) => {
  if (i % 2 === 1) return n * 2
  else return n
}) // [1, 4, 3, 8]

///////////////////////////////////////////////////////////////////

// Array.prototype.filter
// The filter method is used to filter out array elements that fail a boolean test. Only elements that pass the test are allowed through into the new return array.

// The call - back passed to the filter() function can accept any of the three arguments: the item value, the item index, the array itself. A good use case for filter is a search bar:
let articles = [
  { title: "PHP classes", author: "Danny Adams" },
  { title: "Python arrays", author: "Amy Sanders" },
  { title: "Arrays in PHP", author: "Danny Adams" },
]

// another filter based on search criteria
let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter(function (el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
  })
}

console.log(filterItems(fruits, 'ap'))  // ['apple', 'grapes']
console.log(filterItems(fruits, 'an'))  // ['banana', 'mango', 'orange']


// ES2015 Implementation
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

/**
 * Filter array items based on search criteria (query)
 */
const filterItems = (arr, query) => {
  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
}

console.log(filterItems(fruits, 'ap'))  // ['apple', 'grapes']
console.log(filterItems(fruits, 'an'))  // ['banana', 'mango', 'orange']



// Lets say the user searches for all articles with PHP in the title
let PHPArticles = articles.filter(a => a.title.includes("PHP"))
// [
//   { title: 'PHP classes', author: 'Danny Adams' },
//   { title: 'Arrays in PHP', author: 'Danny Adams' },
// ];

// Another use case is filtering via size:
let cities = [
  { name: "Stokington", rivers: 3 },
  { name: "Phillydelfia", rivers: 6 },
  { name: "New Ports", rivers: 2 },
]

let moreThanTwoRivers = cities.filter(c => c.rivers > 2)
// [
//   { name: 'Stokington', rivers: 3 },
//   { name: 'Phillydelfia', rivers: 6 },
// ];

// Syntax
// Arrow function
filter((element) => { /* ... */ })
filter((element, index) => { /* ... */ })
filter((element, index, array) => { /* ... */ })

// Callback function
filter(callbackFn)
filter(callbackFn, thisArg)

// Inline callback function
filter(function (element) { /* ... */ })
filter(function (element, index) { /* ... */ })
filter(function (element, index, array) { /* ... */ })
filter(function (element, index, array) { /* ... */ }, thisArg)

// Filtering out all small values
// The following example uses filter() to create a filtered array that has all elements with values less than 10 removed.
function isBigEnough(value) {
  return value >= 10
}

let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
// filtered is [12, 130, 44]

// Find all prime numbers in an array
// The following example returns all prime numbers in the array:
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]




///////////////////////////////////////////////////////////////////

// Array.prototype.reduce
// The reduce method runs the call - back function on each array element, and reduces the array down into a single value.
// The reduce function itself takes two arguments: a call-back function, an initial value

reduce(callback, initialVal)

// The call - back function passed into reduce can take up to four arguments: total or "accumulator", current item value, current item index, the array itself
let numbers = [1, 2, 3, 4]

let total = numbers.reduce((total, currentNum) => total + currentNum) // 10

// In the above example, total is initially the first value in the array(1), and currentNum is the second(2).

// If we wanted to start from a different value, we can pass in a second initialVal argument to reduce.Let's say we wanted to find the total, starting from 5:
let numbers = [1, 2, 3, 4]

let total = numbers.reduce((total, currentNum) => total + currentNum, 5) // 15

// Above, total will now start out as 5, and currentNum will be the first element in the array(1).

// Another good use case of reduce is to find the max or min value in an array:
let arr = [1, 2, 3]

let max = arr.reduce((a, b) => {
  return Math.max(a, b)
}, -Infinity)
// 3

///////////////////////////////////////////////////////////////////

// Array.prototype.some
// The some method checks if some array values pass a test.It returns either true or false. The call-back takes 3 arguments: the item value, the item index, the array itself. 
let numbers = [4, 6, 14, 16]

let isSomeGreaterThan6 = numbers.some(n => n > 6) // true
let isSomeLessThan4 = numbers.some(n => n < 4) // false

///////////////////////////////////////////////////////////////////

// Array.prototype.every
// every is similar to the some method, but checks if every value in the array passes a certain test, rather than just some.
let numbers = [4, 6, 14, 16]

let isEverythingGreaterThan6 = numbers.every(n => n > 6) // false
let isEverythingLessThan20 = numbers.some(n => n < 20) // true

///////////////////////////////////////////////////////////////////

// Array.prototype.flat
// The flat() method creates a new array with all sub - array elements concatenated into it recursively up to the specified depth.
let arr = [1, 2, 3, [1, 2], 4]

let flatArr = arr.flat() // [1, 2, 3, 1, 2, 4]

// flat takes one optional depth parameter.depth specifies how deep a nested array structure should be flattened.It defaults to 1.

let arr = [1, 2, 3, [1, 2], [1, [1, 2]]]

let flatArr1 = arr.flat() // [1, 2, 3, 1, 2, 1, [1, 2]]
let flatArr2 = arr.flat(2) // [1, 2, 3, 1, 2, 1, 1, 2]

///////////////////////////////////////////////////////////////////

// Array.prototype.find
// The find method returns the first element in the array that passes a certain test. The call - back passed to find takes 3 arguments: The item value, The item index, The array itself
let stock = [
  { item: "ketchup", quantity: 32 },
  { item: "mayo", quantity: 9 },
  { item: "hot sauce", quantity: 12 },
]

let mayo = stock.find(s => s.item === "mayo")
//  { item: 'mayo', quantity: 9 }

///////////////////////////////////////////////////////////////////

// Array.prototype.findIndex
// Same as find, but returns the index instead of the value:
let stock = [
  { item: "ketchup", quantity: 32 },
  { item: "mayo", quantity: 9 },
  { item: "hot sauce", quantity: 12 },
]

let mayoIndex = stock.findIndex(s => s.item === "mayo")
//  1

///////////////////////////////////////////////////////////////////

// Array.prototype.sort
// sort puts an array's elements in ascending order. It is an "in-place" sorting algorithm - meaning that it mutates the original array and returns it.

// By default, sort works on strings:
let names = ["Zoe", "Adam", "Dan"]

names.sort()

console.log(names) // ['Adam', 'Dan', 'Zoe']

// For numbers, we need to pass a comparison call - back function:

let number = [3, 1, 7, 2]

numbers.sort((a, b) => a - b)

console.log(numbers) // [1, 2, 3, 7]

// Initially, a is 3 and b is 1. If a - b is negative, it knows that b is larger, and therefore should come after a.If positive, b should come before a.

//////////////////////////////////////////////////////////////////

// A cheat sheet of array methods:

// To add / remove elements:

// push(...items) - adds items to the end,
// pop() - extracts an item from the end,
// shift() - extracts an item from the beginning,
// unshift(...items) - adds items to the beginning.
// splice(pos, deleteCount, ...items) - at index pos deletes      deleteCount elements and inserts items.
// slice(start, end) - creates a new array, copies elements from index start till end(not inclusive) into it.
// concat(...items) - returns a new array: copies all members of the current one and adds items to it.If any of items is an array, then its elements are taken.

// To search among elements:

// indexOf / lastIndexOf(item, pos) - look for item starting from position pos, return the index or - 1 if not found.
// includes(value) - returns true if the array has value, otherwise false.
// find / filter(func) - filter elements through the function, return first / all values that make it return true.
// findIndex is like find, but returns the index instead of a value.

// To iterate over elements:

// forEach(func) - calls func for every element, does not return anything.

// To transform the array:

// map(func) - creates a new array from results of calling func for every element.
// sort(func) - sorts the array in -place, then returns it.
// reverse() - reverses the array in -place, then returns it.
// split / join - convert a string to array and back.
// reduce / reduceRight(func, initial) - calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.

Additionally:

// Array.isArray(arr) checks arr for being an array.

// Please note that methods sort, reverse and splice modify the array itself.

// These methods are the most used ones, they cover 99 % of use cases.But there are few others:

// arr.some(fn) / arr.every(fn) check the array.

// The function fn is called on each element of the array similar to map.If any / all results are true, returns true, otherwise false.

// These methods behave sort of like || and && operators: if fn returns a truthy value, arr.some() immediately returns true and stops iterating over the rest of items; if fn returns a falsy value, arr.every() immediately returns false and stops iterating over the rest of items as well.

// We can use every to compare arrays:

// function arraysEqual(arr1, arr2) {
//   return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
// }

// alert(arraysEqual([1, 2], [1, 2])); // true

// arr.fill(value, start, end) – fills the array with repeating value from index start to end.

// arr.copyWithin(target, start, end) – copies its elements from position start till position end into itself, at position target(overwrites existing).

// arr.flat(depth) / arr.flatMap(fn) create a new flat array from a multidimensional array.