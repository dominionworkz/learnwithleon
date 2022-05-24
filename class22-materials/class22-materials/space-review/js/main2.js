//Arrays
let nums = [2,3,4]

nums[0] //2

nums[0] = 47 // this reassigned the index [0]
console.log(nums) //47,3,4

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let numbers = [3, 1, 7, 2]
let sum = nums.reduce( (acc,c) => acc + c, 0) //acc-accumulator, c-current value
alert(sum) //this will be the total sum of the accumulations and current values 

// these below are what else that can be done
// let sum = nums.reduce((acc, c) => acc - c, 0)
// let sum = nums.reduce((acc, c) => acc * c, 1) 
// let sum = nums.reduce((acc, c) => acc / c, 1)


//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let numberSquare = [3, 1, 7, 2]

function squareNums(){
  return nums.map(n => n * n)
}
console.log(numberSquare)


let number = [3, 1, 7, 2]
let numsSquared = nums.map(n => n * n)


//Create a function that takes string
//Print the reverse of that string to the console
function reverseStr(str){
  let reverseStr = str.split('').reverse().join('')
  console.log(reverseStr)
}

reverseStr('car') //rac



//Create a function that takes in a string
//Alert if the string is a palindrome or not
const isPalidrone = s => s === s.split('').reverse().join('') ? alert('Yes') : alert('No') //this is a ternary function


//a simpler way
function isPalidrone(str){
  let reverseStr = str.split('').reverse().join('')
  if(str === reverseStr){
    alert('Yes')
  }else{
    alert('No')
  }
}
isPalidroneCheck('racecar')