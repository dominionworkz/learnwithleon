//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [42, 19, 77, 33, 57]
let sum = nums.reduce((acc, c) => acc + c, 0)
alert(sum)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let numberSquare = [30, 10, 70, 20]
function squareNums() {
  return nums.map(n => n * n)
}
console.log(numberSquare)

let number = [3, 1, 7, 2]
let numsSquared = nums.map(n => n * n)



//Create a function that takes string
//Print the reverse of that string to the console
function reverseStr (str){
  let reverseStr = str.split('').reverse().join('')
  console.log(reverseStr)
}
reverseStr('function')



//Create a function that takes in a string
//Alert if the string is a palindrome or not
function isPalidrone(str) {
  let reverseStr = str.split('').reverse().join('')
  if (str === reverseStr) {
    alert('Yes')
  } else {
    alert('No')
  }
}
isPalidroneCheck('racecar')