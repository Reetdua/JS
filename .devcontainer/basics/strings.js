//Lec 6. Strings

const name = "reet"
const repoCount = 50
console.log(name + repoCount + " Value")   //Outdated version to concat strings

/**********************************************************************************************************************************************************************/

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)      
//Proffesional console.log(`string ${variable} string`)

/**********************************************************************************************************************************************************************/

//creating string using new keyword as an object
const gameName = new String('reet-rd-com')

console.log(gameName[0]);               //string at index 0
console.log(gameName.__proto__);        //{}


//Use dot operator to access more functions foe the string

console.log(gameName.length);           //11
console.log(gameName.toUpperCase());    //REET-RD-COM
console.log(gameName.charAt(2));        //character at index function
console.log(gameName.indexOf('e'));     //index of a character '' where it first occurs as e is on both 1 & 2 index

//SUBSTRING FUNCTION
const newString = gameName.substring(0, 4)  //last index 4 is excluded
console.log(newString);                     //reet
                                            // substring does'nt allow negative indexing

//SLICING METHOD                                          
const anotherString = gameName.slice(-11, -3) //slicing allows negative indexing and starts from the backwards
console.log(anotherString);


//TRIMING
const newStringOne = "   REETDUA    "
console.log(newStringOne);
console.log(newStringOne.trim());           //REMOVES EXTRA SPACES FROM FRONT AND BACK BOTH


//REPLACING a character 
const url = "https://duaareet.com/reet%20dua"

console.log(url.replace('%20', '-'))    //doent change the original string as string is a primitive

//INCLUDE 
console.log(url.includes('sundar'))     //checks if a substring is present = false

//SPLITTING
console.log(url.split('/'));       //SLITS THE STRING AFTER A PARTICULAR CHARACTER
                                        //returns in a form of array ['string' ,'string']