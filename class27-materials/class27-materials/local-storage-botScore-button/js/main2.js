//Create a button that adds 1 to a botScore stored in localStorage 
if(!localStorage.getItem('botScore')){
  localStorage.setItem('botScore', 0)
}

document.querySelector('button').addEventListener('click', addAnotherOne)

function addAnotherOne(){
  let botScoreVal = Number(localStorage.getItem('botScore'))
  botScoreVal += 1
  localStorage.setItem('botScore', botScoreVal)
}

