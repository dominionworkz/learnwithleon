//--- Easy
//create a variable and assign it a number
let num = 137
let number = 50

//minus 10 from that number
num = num - 10
number = number - 20

//print that number to the console
console.log(num)
console.log(number)

//--- Medium
//create a variable that holds a value from the input
let input = num(document.querySelector('#danceDanceRevolution').value)

let valInput = number(document.querySelector('#valueInputChallenge').value)

//add 25 to that number
numInput += 25

valInput = valInput + 200

//alert that number
alert(numInput)

alert(valInput)

//--- Hard
//create a variable that holds the h1
const h1 = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables

h1.addEventListener('click', addTwo)

function addTwo(){00000
    let input = num(document.querySelector('#danceDanceRevolution').value)
    numInput += 25

    console.log(num + numInput)
}