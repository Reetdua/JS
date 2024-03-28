const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]


// marvel_heros.push(dc_heros)                           //bad method ad 3rd element will be entire dc array ** changes occur in Marvel array only!
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);



const allHeros = marvel_heros.concat(dc_heros)          //better arr3=arr1.concat(arr2) ** only for 2 arrays merging
console.log(allHeros);



const all_new_heros = [...marvel_heros, ...dc_heros]    // ... = SPREADING   ** best industry practice
console.log(all_new_heros);                             //... can take multiple arrays



const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity) //.flat(degree) -> opens up the nesting upto degree specified ** infinity -> open till end i.e nonesting should be left
console.log(real_another_array);



console.log(Array.isArray("Reet_Dua"))                  //checks whether the provided value is an array or not."Reet_Dua" is string -> false



console.log(Array.from("BATMAN"))                       //creates new array from an array-like or iterable object
                                                        //returns a new array containing the characters as elements



console.log(Array.from({name: "duaa"}))                 //interesting
                                                        //{name: "duaa"} is not iterable,doesn't have property like length orindexed properties (like arrays) that can be iterated over


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));          //new array with the given arguments as its elements