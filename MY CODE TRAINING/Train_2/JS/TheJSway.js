https://github.com/thejsway/thejsway/blob/master/manuscript/chapter02.md

// 3,2,1...Code! Reading and code along 03/05/22
// console.log section
// console.log("Hello from JavaScript!");
// console.log("Let's do some math");
// console.log(4 + 7);
// console.log(12 / 0);
// console.log("Goodbye!");

// console.log('QB');
// console.log(47);

// console.log(47 + 37);
// console.log(47 - 37);
// console.log(47 * 37);
// console.log(47 / 37);

// console.log(6 + 3);
// console.log(6 - 3);
// console.log(6 * 3);
// console.log(6 / 3);

// variables section
// let a;
// a = 3.22;
// console.log(a);

// let b = 'black';
// console.log('black');

// const or constance section
// this can't be modified
// const s = 45; 
// s = 47;
// console.log(s);

// let d = 100;
// d = 0;
// console.log(d);

// increment number section
// let y = 0;
// y += 14;
// y++;
// console.log(y);

// let z = 25;
// z += 100;
// z ++;
// console.log(z);

// let r = 47;
// r += 20;
// console.log(r);

// let l = 50;
// l ++;
// console.log(l);

// variable scope section
// let numberOne = 24;
// {
//   numberOne = 24;
// }
// console.log(numberOne);

// let numberTwo = 74;
// {
//   numberTwo = 74;
// }
// console.log(numberTwo);

// Expressions section
// const v =10;
// let m = v;
// m = m + 1;
// console.log(m);

// let q = 5 + 5 * 5;
// q = (5 + 5) * 5;
// console.log(q);

// let o = 4 + 6 * 6;
// o = (4 + 6) * 6;
// console.log(o);

// const country = "USA";
// console.log(`I live in ${country}`);
// const x = 5;
// const y = 7;
// console.log(`${x} + ${y} = ${x + y}`);

// const belief = "in the Lord";
// console.log(`I believe ${belief}`);

// Type conversions section
// const w = 200;
// console.log('variable w contains the value' + w);

// const p =24;
// console.log('twenty[four carats high value' + p);

// const k = "fiveK" * 500;
// console.log(k);

// const z = 'HundredDevs' * 100;
// console.log(z);

// const q = "100";
// console.log(q + 10);

// const h = Number("4");
// console.log(h + 20);

// User interaction section
// const quincy = prompt('Type your first name');
// alert(`YeaMon, ${quincy}`);

// const LoBulla = prompt("Type your middle name");
// alert(`BigUp, ${LoBulla}`);

// Displaying Info section
// const temp1 = 30.1;
// const temp2 = 30.2;
// const temp3 = 30.3;
// console.log(temp1, temp2, temp3);

// const Lord = 'Only One';
// const Love = 'Never fades';
// const Mercy = 'Renewed Daily';
// console.log('Only One', 'Never fades', 'Renewed Daily');

// Entering a Number
// const input = prompt("Enter a number:");
// const nb = Number(input);

// const input = prompt("Enter a Number");
// const birthYear = Number(input);

// const birthYear = Number(prompt("Enter a Number"));

// Variable naming section
// const a = 1;
// const b = 2;
// const c = 3;
// console.log(a);

// const  first = 1;
// const second = 2;
// const third = 3;
// console.log(first);

// Coding Time
// const firstName = 'Jon';
// const lastName = 'Jonson';
// console.log(firstName, lastName); 

// let a = 2;
// a -= 1;
// a++;
// let b = 8;
// b += 2;
// const c = a + b * b;
// const d = a * b + b;
// const e = a * (b + b);
// const f = a * b / a;
// const g = b / a * a;
// console.log(a, b, c, d, e, f, g);

// const input = prompt("Enter a number:");
// let price = Number(input);
// alert(price + 20.6);

// function convertToFahrenheit(celsius){
//   let fahrenheit;
//   fahrenheit = celsius * (9/5) + 32;
//   console.log(fahrenheit);
// }
// convertToFahrenheit(30);

// function convertingFahrenheit(celsius){
//   let fahrenheit;
//   fahrenheit = celsius * (9/5) + 32;
//   console.log(fahrenheit);
// }
// convertingFahrenheit(100);

// Variable swapping section
// let number4 = 4;
// let number5 = 5;
// (number4 = 5, number5 = 4);
// console.log(number4, number5);

// let num1 = 200;
// let num2 = 300;
// (num1 = 300, num2 = 200);
// console.log(num1, num2);


// // Add conditions section examples below
// if (condition) {
//   // Code to run when the condition is true
//   // This block of code will always be executed
// }
// else {
//   // Code to run when the condition is false
//   // This block of code will never be executed
// }

// const number = Number(prompt("Enter a number:"));
// if (number >= 0) {
//   console.log(`${number} is positive or zero`);
// }
// const number = Number(prompt("Enter a number:"));
// if (number > 0) {
//   console.log(`${number} is positive`);
// }
// else {
//   console.log(`${number} is negative or zero`);
// }

// const number = Number(prompt("Enter a number:"));
// if (number > 0) {
//   console.log(`${number} is positive`);
// } else {
//   // number <= 0
//   if (number < 0) {
//     console.log(`${number} is negative`);
//   } else {
//     // number === 0
//     console.log(`${number} is zero`);
//   }
// }
// // a more concise way of the above
// const number = Number(prompt("Enter a number:"));
// if (number > 0) {
//   console.log(`${number} is positive`);
// } else if (number < 0) {
//   console.log(`${number} is negative`);
// } else {
//   console.log(`${number} is zero`);
// }

// // multiple choice exercise
// const weather = prompt("What's the weather like?");
// if (weather === "sunny") {
//   console.log("T-shirt time!");
// } else if (weather === "windy") {
//   console.log("Windbreaker life.");
// } else if (weather === "rainy") {
//   console.log("Bring that umbrella!");
// } else if(weather === "cold"){
//   console.log("Bundle Up Gear");
// } else if (weather === "snowy") {
//   console.log("Just stay inside!");
// } else {
//   console.log("Not a valid weather type");
// }

// // Switch exercise
// switch (expression) {
//   case value1:
//     // Code to run when the expression matches value1
//     break;
//   case value2:
//     // Code to run when the expression matches value2
//     break;
//   // ...
//   default:
//   // Code to run when neither case matches
// }

// const weather = prompt("What's the weather like?");
// switch (weather) {
//   case "sunny":
//     console.log("T-shirt time!");
//     break;
//   case "windy":
//     console.log("Windbreaker life.");
//     break;
//   case "rainy":
//     console.log("Bring that umbrella!");
//     break;
//   case "cold":
//     console.log("Bundle Up Gear");
//     break;
//   case "snowy":
//     console.log("Winter is coming! Just stay inside!");
//     break;
//   default:
//     console.log("Not a valid weather type");

// Write a program that accepts a day name from the user, then shows the name of the following day.Incorrect inputs must be taken into account.
// const dayOfWeek = prompt ("What day of the week is it?");
// if (dayOfWeek === "Sunday") {
//   console.log("Praise the Lord");
// } else if (dayOfWeek === "Monday") {
//   console.log("Work Day Starts");
// } else if (dayOfWeek === "Tuesday") {
//   console.log("Day Two");
// } else if (dayOfWeek === "Wednesday") {
//   console.log("HumpDay");
// } else if (dayOfWeek === "Thursday") {
//   console.log("One Day to Go");
// } else if (dayOfWeek === "Friday") {
//   console.log("Happy Friday");
// } else {
//   console.log("Not a valid Day");
// }

// Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.
// let nb1 = Number(prompt("Enter nb1:"));
// let nb2 = Number(prompt("Enter nb2:"));
// let nb3 = Number(prompt("Enter nb3:"));

// if (nb1 > nb2) {
//   nb1 = nb3 * 2;
// } else {
//   nb1++;
//   if (nb2 > nb3) {
//     nb1 += nb3 * 3;
//   } else {
//     nb1 = 0;
//     nb3 = nb3 * 2 + nb2;
//   }
// }
// console.log(nb1, nb2, nb3);