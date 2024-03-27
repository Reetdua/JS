//LEC 5 Comparison of Datatypes


//console.log(2 > 1);      //true
// console.log(2 >= 1);     //true
// console.log(2 < 1);      //false
// console.log(2 == 1);     //false
// console.log(2 != 1);     //true


//console.log("2" > 1);       //true : string->number => "2"=2 & 2>1 [implicit conversion]
//console.log("02" > 1);      //true " samecase

console.log(null > 0);          //false
console.log(null == 0);         //false
console.log(null >= 0);         //true

console.log(undefined == 0);    //false
console.log(undefined > 0);     //false  
console.log(undefined < 0);     //false

// === 
// checks the value as well as the datatype

console.log("2" === 2);         //false
console.log("2" == 2);          //true