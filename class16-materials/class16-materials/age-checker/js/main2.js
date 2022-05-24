//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too

let age = 17
function CheckAge(){
  let UserInputAge = document.querySelector('#danceDanceRevolution').value
  UserInputAge = Number(UserInputAge)
  if (UserInputAge < 16) {
    console.log('they can not drive')
 }else if (UserInputAge > 15){
   console.log('You are smart')
 }
}

if (age < 16) {
  console.log('they can not drive')
}else if (age < 18) {
  console.log('they can\'t hate from outside the club, because they can\'t even get in')
}else if(age < 21){
  console.log('they can not drink')
}else if(age < 25){
  console.log('they can not rent cars affordably')
}

document.querySelector('h1').addEventListener('click',CheckAge)


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
