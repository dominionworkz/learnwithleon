const contestantSection = document.querySelectorAll('.contestantSection')
Array.from(contestantSection).forEach(element => element.addEventListener('click',checkForRose)) // turns it into a pure array

function checkForRose(click){
		if (click.currentTarget.classList.contains('checkForRose')) {
				document.querySelector('#sharleen').classList.toggle('hidden')
				
		} else {
				document.querySelector('#claire').classList.toggle('hidden')
				document.querySelector('#nikki').classList.remove('hidden')
				alert("Wrong Baddie!!!");
		}
} 
// My first attempt
// const contestantSection = document.querySelectorAll('.contestantSection')
// Array.from(contestantSection).forEach(element => element.addEventListener('click',checkForRose))

// function checkForRose(click){
// 	if (click.target.classList.contains('checkForRose')) {
// 		document.querySelector('#nikki').classList.toggle('hidden')
// 	} else {
// 		alert("Wrong Baddie!!!");
// 	}
// }