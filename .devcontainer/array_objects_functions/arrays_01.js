// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

// myArr.push(6)                       //adds element in the end
//myArr.push(7)
// myArr.pop()                         //removes the last element
// console.log(myArr)

// myArr.unshift(9)                        //adds element at 0th index -> not efficient since all the indexings will have to shift
// console.log(myArr)
// myArr.shift()                           //removes the first element
// console.log(myArr)

// console.log(myArr.includes(9));      //returns true/false
// console.log(myArr.indexOf(3));       //returns index / -1 for not found

//JOIN method
//const newArr = myArr.join()             //join() method is used to join all elements of an array into a single string
const newArr = myArr.join(' and ')      //join(' and ') joins all elements of the array myArr into a single string, with each element separated by the string ' and '

console.log(myArr);
console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

/*NOTES : slice() returns a new array containing a portion of the original array, without modifying the original array.
         splice() modifies the original array by removing or replacing elements, and it returns an array containing the deleted elements.

Shallow copy VS Deep copy concept : Shallow copy duplicates only the top-level structure [pass by reference], 
                                    while deep copy duplicates both top-level and nested structures.[pass by value-creates a copy!]
                                    
                                    Shallow copies -> changes affect both original and copy. 
                                    Deep copies -> create independent copies, ensuring changes are isolated.

*/