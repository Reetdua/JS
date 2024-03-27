//Lec 7. math and num library

//normal declaration as a number : dynamically typed
const score = 400
console.log(score);                 //400

//declaring as an object using the 'new' keyword
const balance = new Number(400) 
console.log(balance);               //[Number: 400]


//Number -> String : using string methods on it
console.log(balance.toString().length);     //3
console.log(balance.toString().charAt(0))   //4


/**************************************************Methods in Number****************************************************************************************************/

//TO FIXED
//: To tell precision upto (n) decimal places
console.log(balance.toFixed(2));        //400.00

//TO PRECISION
//rounds off the decimal number
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));        //123.9 !! NOT 4 PLACES AFTER DECIMAL !! TOTAL 4 DIGIT PRECESION

//LOCALE STRING
const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));  //Adds comas as per indian standards



// ++++++++++++++++++++++++++++++++++++++++=+++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++==/

console.log(Math);                  //math is simply an object in JS that has many useful functions init
console.log(Math.abs(-4));          //.abs -> gives absolute value i.e removes negative sign [4]
console.log(Math.round(4.6));       //.round -> rounds off [5]
console.log(Math.ceil(4.2));        //.ceil -> gives ceiling value [5]
console.log(Math.floor(4.9));       //.floor -> gives the floor value [4]
console.log(Math.min(4, 3, 6, 8));  //.min -> finds minimum [3] 
console.log(Math.max(4, 3, 6, 8));  //.max -> finds maximum [8]

console.log(Math.random());                         // generates random value between (0,1)
console.log((Math.random()*10) + 1);                // *10 to get no>1, +1 to avoid 0
console.log(Math.floor(Math.random()*10) + 1);      // .floor to get a random single digit no 1-9

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  //to get random value in a particular range 