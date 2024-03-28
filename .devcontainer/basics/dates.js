//Lec 8. Dates and Timestamps

let myDate = new Date()                     // date is an object
console.log(myDate)                         // gives a date in non readable typeof format        
console.log(myDate.toString());             // little better readability also date->String enables many Functions
console.log(myDate.toDateString());         // shows only date and removes the time
console.log(myDate.toLocaleString());       // best mm/dd/yyyy format + time
console.log(typeof myDate);                 // object

let myCreatedDate = new Date(2023, 0, 23)               // 0 indexing for months JAN = 0
//let myCreatedDate = new Date(2023, 0, 23, 5, 3)         // includes time as well
// let myCreatedDate = new Date("2023-01-14")              // can be specified in yyyy-mm-dd [!here 1 = january!]
// let myCreatedDate = new Date("01-14-2023")              // mm-dd-yyyy
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);                      //current time stamp give a HUGE number bcz it counts milisec from a particular date in 1970
console.log(myCreatedDate.getTime());          //timstamp for a date
console.log(Math.floor(Date.now()/1000));      // to convert into seconds

//methods of date object
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1 );    //+1 to avoid 0 indexing problem as 0=jan
console.log(newDate.getDay());           //0-6 format

// `${newDate.getDay()} and the time `   //String interpolation method

console.log(newDate.toLocaleString('default', {
    weekday: "long",                                //can be printed as Mon/Monday/00 different formats
    
}))