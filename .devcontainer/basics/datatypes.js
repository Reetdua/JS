//LEC.3 DATA TYPES AND ECMA SCRIPT STANDARDS

"use strict"; // treat all JS code as newer version

//alert( 3 + 3) // Gives error : we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Reet")


let name = "reet"
let age = 18
let isLoggedIn = false
let state;

// JS is dynamically typed language i.e we dont have to declare the variable type while defining it

/********************************************************************************************************************************************/

// 7 primitive datatypes

// number => 2 to power 53 , both int and float are included
// bigint => for very very huge numbers like stock market,quantum calculations etc
// string => "" or ''
// boolean => true/false
// null => standalone value eg - you are using it in defining temprature . here 0 value will not work because it actually means something
// undefined => Unassigned variables are initialized by JavaScript with a default value of undefined.
// symbol => uniqueness is defined - later much used in react etc

/***********************************************************************************************************************************************/

// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object