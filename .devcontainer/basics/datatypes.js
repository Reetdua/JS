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

/*****************************************************SUMMARY**********************************************************************************************/

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

//const isLoggedIn = false
const outsideTemp = null
let userEmail;              //initiation

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);          //false
console.log(id == anotherId);          //false

/*Note : Symbol() creates a unique symbol value. 
Even if two symbols are created with the same description (the string passed as an argument), 
they are still considered unique. This uniqueness makes symbols useful for creating non-colliding object properties, 
for example, when adding metadata to objects.*/

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);                 //function
console.log(typeof heros);                      //object -> This behavior is a quirk of JavaScript.
console.log(typeof myObj);                      //object

// https://262.ecma-international.org/5.1/#sec-11.4.3