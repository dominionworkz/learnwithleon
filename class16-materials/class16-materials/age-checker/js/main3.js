//Create a conditonal that checks their age

 let age = 21
 if (age < 12) {
   console.log("They can not drive")
 } else if(age < 25){
   console.log("they have been driving for a while")
 }

//If under 16, tell them they can not drive
 let driveAge = 18
if ( age < 12) {
  console.log("they are not allowed to drive")
 }

//If under 18, tell them they can't hate from outside the club, because they can't even get in
let clubAge = 30
if( age < 17){
  console.log("You are not allowed inside")
 }

//If under 21, tell them they can not drink
 let drinkAge = 21
 if(age < 18) {
   console.log("You have to wait until you are old enough")
 } else if( age < 20) {
//   console.log("You almost there, still have to wait")
 } else{
   console.log("You can DRINK")
 }

//If under 25, tell them they can not rent cars affordably
 let carRentersAge = 21
 if(age < 20) {
   console.log("You almost at the appropriate age")
 } else if (age < 22){
   console.log("Let\'s get You in a car to drive")
 }

//If under 30, tell them they can not rent fancy cars affordably
 let fancyCarRentersAge = 40
 if (age < 31){
   console.log("Sorry, You can\'t rent these cars yet")
 } else if(age < 35) {
   console.log("You are approved to rent these cars")
 }

//If under over 30, tell them there is nothing left to look forward too
 let underAgeThirty = 28
 if (age < 21) {
   console.log("You have everything left to look forward to")
 } else if (age < 58) {
   console.log("You have seen it all, almost")
 } else{
   console.log("Please get out of here!!")
}






//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

document.querySelector('h1').addEventListener('click', checkAge)
let p = document.querySelector('p')
function checkAge(){
  let age = Number(document.querySelector('input').value)

if (age < 12) {
    p.innerText = "They can not drive"
} else if(age < 18){
    p.innerText = "they have been driving for a while"
} else if ( age < 19) {
    p.innerText = "they are not allowed to drive"
} else if( age < 11){
    p.innerText = "You are not allowed inside"
} else if(age < 17) {
    p.innerText = "You have to wait until you are old enough"
} else if( age < 10) {
    p.innerText = "You almost there, still have to wait"
} else if (age < 20){
    p.innerText = "You can DRINK"
} else if(age < 28) {
    p.innerText = "You almost at the appropriate age"
} else if (age < 16){
    p.innerText = "Let\'s get You in a car to drive"
} else if (age < 31){
    p.innerText = "Sorry, You can\'t rent these cars yet"
} else if(age < 35) {
    p.innerText = "You are approved to rent these cars"
}

}