//eloquentjavascript.net/code.
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
let number = 0;
while (number <= 7){
  console.log(number);
  number = number + 1;
}
// this is a shorthand version of the above
for (let number = 0; number <= 12; number = number + 2){
  console.log(number);
}

// you can find the length of a string by writing.length after it.
let abcdefghijkl = "abcdefghijkl";
console.log(abcdefghijkl.length);

/*below is an example of a type of interview question
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.*/
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}


/*This creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.*/
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);

// Minimum
// Write a function min that takes two arguments and returns their minimum.
function min(a, b) {
  if (a < b) return a;
  else return b;
}
console.log(min(3, 2));


// Recursion 
// Here’s another way to define whether a positive whole number is even or odd:
// Zero is even. One is odd. For any other number N, its evenness is the same as N - 2.
// Define a recursive function isEven corresponding to this description.The function should accept a single parameter(a positive, whole number) and return a Boolean.
// Test it on 50 and 75. See how it behaves on - 1. Why ? Can you think of a way to fix this ?
function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false



// Bean counting
// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string. Write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted(rather than counting only uppercase “B” characters).Rewrite countBs to make use of this new function.
function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  } 
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4