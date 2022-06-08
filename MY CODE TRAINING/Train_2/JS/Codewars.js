///////////////////////////////////////////////////////////////////
// CODEWARS Problems
///////////////////////////////////////////////////////////////////

function noSpace(x) {
  let a = x;
  let b = x;
  let c = x;

  a = a.split(''); // separates a string based on the delimiter('') then converts it into an array.

  a = a.filter(ch => {
    return ch !== ' ';
  });

  // .filter goes through each element in the array and
  // only returns the elements (ch) that is not equal to a space (!== ' ')

  a = a.join('');
  console.log(a = ${ a });

  //ONE LINER
  b = b.split('').filter(ch => ch !== ' ').join('');
  console.log(b = ${ b });

  //REGULAR EXPRESSION
  c = c.replace(/ /g, '');
  console.log(c = ${ c });

  return a;
} 
///////////////////////////////////////////////////////////////////
// Convert number to reversed array of digits
// Given a random non - negative number, you have to return the digits of this number within an array in reverse order.
// 348597 => [7, 9, 5, 8, 4, 3]
// 0 => [0]

function digitize(n) {
  let digitize
  return n.toString().split('').map(Number).reverse();
}

// the below is a longer solution to the above
function digitize(n) {
  let initialArray = ("" + n).split('');
  let reversedArray = [];
  for (let i = initialArray.length - 1; i >= 0; i--) {
    reversedArray[i] = parseInt(initialArray.shift(), 10);
  }
  return reversedArray;
}
console.log(digitize(348597));
///////////////////////////////////////////////////////////////////
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(num) {
  if(num % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
};

// a simpler version of the above
function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}

/* This is a Codewar challenge for Grade book Challenge for three scores  passed to return a letter value for the grade*/
function getGrade (s1, s2, s3) {
  let score = ( s1 + s2 + s3) / 3;
  if (score >= 90 && score <= 100) {
    return 'A';
  } else if (score >= 80){
    return 'B';
  } else if (score >= 70){
    return 'C';
  } else if (score >= 60){
    return 'D';
  } else {
    return 'F';  
  }
}