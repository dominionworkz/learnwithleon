//A variable is a container for a value.

<button id="button_A">Press Me</button><h3 id="heading_A"></h3>

const buttonA = document.querySelector('#button_A');
const headingA = document.querySelector('#heading_A');

buttonA.onclick = () => {
    const name = prompt('What is your name?');
    alert(`Hello ${name}, nice to meet you!!`);
    headingA.textContent = `Greetings ${name}`?
}