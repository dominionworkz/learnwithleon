//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtractAndAlert(numA, numB){
    let difference = numA - numB
    alert(difference);
}
//subtractAndAlert(100, 40) this is calling the function

//create a function that divides three numbers and console logs the quotient
function dividesThreeAndLog(Num1, Num2, Num3){
         console.log(Num1 / Num2 / Num3);
}
//dividesThreeAndLog(10, 200, 40) this is calling the function


//create a function that multiply three numbers and returns the product
function multiplyThreeAndReturn(n1, n2, n3){
    return n1 * n2 * n3;
}
let returnedVal = multiplyThreeAndReturn(7, 7, 7) //multiplyThreeAndReturn(7, 7, 7) is going to disappear because the return is going to put 343 where it was called.
//console.log(returnedVal) //returnedVal is now displaying the value 343


//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function sumAndDivide(n1a, n2a, n3a){
    return (n1a + n2a) % n3a    
}

//let sumAndDivides = (n1a,n2a,n3a)=>(n1a+n2a)%n3a //this is the short way of doing the above, also you don't need the return on this because => function has implicate returns in them

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function mathOut(n1b,nb2,nb3,nb4){  //4#s are taken in
    let product =n1b * nb2          //2#s are multiplied
    if(product > 100){              //if product is > than 100
    console.log(product + nb3 + nb4)//product is > than 100 + last 2#s
    }else if(product < 100) {       //if product is < than 100
    console.log(product - nb3 - nb4)//product is < than 100 - last 2#s
    }else{
        alert((n1b*nb2*nb3) % nb4)  //product is 100 * 1st 3#s alert % 4th#
    }
}
mathOut(100,20,40,50)
mathOut(100,1,3,2)