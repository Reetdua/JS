//Lec 4. Dtatype Conversion And Operations


let score = "reet"
//console.log(typeof score);  
console.log(typeof(score));   //can be written as a function() but same output

//string -> number conversion
let valueInNumber = Number(score)
console.log(typeof valueInNumber); //Nunmber
console.log(valueInNumber); //NaN ; Not A Number

//How is conversion done in String -> Number
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0


//String -> Boolean Conversion
let isLoggedIn = "reet"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false; 55 => true
// "" => false
// "reet" => true


//Number -> String
let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);  //33
console.log(typeof stringNumber);   //string


/******************************************************* Operations **************************************************************************/

let value = 3
let negValue = -value
// console.log(negValue);   //-3

/********************************************************************************************************************************************/

//basic operators

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " reet"

let str3 = str1 + str2      //basic string concatination : String + String
console.log(str3);

console.log("1" + 2);       //12
console.log(1 + "2");       //12
console.log("1" + 2 + 2);   //122
console.log(1 + 2 + "2");   //32 ********* num+num+string => NUM+string => String

// console.log( (3 + 4) * 5 % 3); //we nust use paranthesis in proffesional code writing to increase the readability and avoiding confusion 


console.log(+true);         //number + boolean -> 0+1 =1
//console.log(true+)        //error: not a valid statement
console.log(+"");           //0
console.log("33"+false)     //33false : string concatenation
console.log(""+false)       //false
console.log(+false)         //0 number +boolean = 0+0=0


let num1, num2, num3
num1 = num2 = num3 = 2 + 2  //not a good practice


//Increament operator
let gameCounter = 100
++gameCounter;
console.log(gameCounter);   //101


/*The ECMAScript language implicitly performs automatic type conversion as needed.
To clarify the semantics of certain constructs it is useful to define a set of conversion abstract operations. 
The conversion abstract operations are polymorphic; they can accept a value of any ECMAScript language type. 
But no other specification types are used with these operations.

The BigInt type has no implicit conversions in the ECMAScript language; 
programmers must call BigInt explicitly to convert values from other types.*/

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion