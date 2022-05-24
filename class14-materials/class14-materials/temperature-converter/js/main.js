//Write your pseduo code first! 

// only on click
document.querySelector('#yell').addEventListener('click', run)


function run() {
    console.log('HELLO TWITCH'
    )
    // get value out input
  const pumkin = document.querySelector('#firstName').value
// convert the value
pumkin = pumkin * 9/5 +32
// show the value to user
document.querySelector('#placeToYell').innerText = pumkin