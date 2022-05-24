// *Variables*
// Declare a variable and assign it to a sentence as a string. Alert if the sentence is a question
const str = 'Is 100Devs for Bangers only?'
alert( str.endsWith('?'))






//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let strToChange = "I am looking for jr. dev positions."
    console.log(strToChange.replaceAll('jr. dev', 'software engineering'))


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
  let random = Math.random()
  if(random < .33){
    return 'rock'
  } else if(random < .66){
    return 'paper'
  }else{
    return 'scissors'
  }
}

function rockPaperScissors() {
  let random = Math.random()
random < .33 ? 'rock' : random < .66 ? 'paper' : 'scissors'
} //ternary function



// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(playerChoice){
  let botChoice = rockPaperScissors()
  if((playerChoice === 'rock' && botChoice === 'scissors') ||
  (playerChoice === 'scissors' && botChoice === 'paper') || 
  (playerChoice === 'paper' && botChoice === 'rock')){
    console.log('You Win Conquer')
  } else if (playerChoice === botChoice) {
    console.log('You Tied Punk')
  } else {
    console.log('You Lose Bummer')
  } 
}




//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
