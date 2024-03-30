// singleton : objects that are instantiated only once
// Object.create

// object literals :  syntax for defining objects

const mySym = Symbol("dua")


const JsUser = {
    name: "Reet",
    "full name": "Miss Reet Dua",
    [mySym]: "mykey1",
    age: 18,
    location: "delhi",
    email: "reet@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])        //this "" type of keys and symbols cannot be accessed from . method
console.log(JsUser[mySym])
console.log(JsUser[Symbol("dua")])      //symbols cannot be accessed this way **undefined


JsUser.email = "reet@chatgpt.com"

//Object.freeze(JsUser)                   //.freeze makes key value pairs const


JsUser.email = "reet@microsoft.com"     //no change after freeze
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);     //string interpolation method ** this.key to access the value of the object
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());