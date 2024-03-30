// const tinderUser = new Object()      //singleton  -> objects that are instantiated only once
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {               //nested objects
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "reet",
            lastname: "dua"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);    //can be accessed using multiple . 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//onst obj3 = { obj1, obj2 }                                     //incorrect : makes nested objects
// const obj3 = Object.assign({}, obj1, obj2, obj4)              // correct but not much used

const obj3 = {...obj1, ...obj2}               // spread syntax ({...}) ** best
console.log(obj3);


const users = [                              //arrays with objects as elements
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "I@gmail.com"
    },
    {
        id: 1,
        email: "j@gmail.com"
    },
]

users[1].email                               //array[index].key notation


/*********************************************OBJECTS -> ARRAYS******************************************************************************/

console.log(tinderUser);
console.log(Object.keys(tinderUser));       //makes an array of keys of passed object
console.log(Object.values(tinderUser));     //similarly array for values
console.log(Object.entries(tinderUser));    // makeas [key:value] pairs individual element of array


console.log(tinderUser.hasOwnProperty('isLoggedIn'));       //to check if key exist in the object ** true/false


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "duaa"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "miss reet",
//     "coursename": "js in eng",
//     "price": "free"
// }

[
    {},
    {},
    {}
]