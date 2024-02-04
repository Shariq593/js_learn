const arr = [1,2,3,4,5]


arr.push(6)
arr.push(7) //adds an elemt in the last
arr.pop() // removes the last element

arr.unshift(0) //adds an elemet at the beginning of the array
arr.shift() // removes the last element

// console.log(arr.includes(3)) // return a boolean value 
// console.log(arr.indexOf(5)) // return the pos of the value, and -1 means outside of the array

const newArr = arr.join() // tranform the array into a string


//**********SLICE AND SPLICE ******************* */
const myn1 = arr.slice(1,3) 
console.log(myn1);
console.log("A",arr);
//slice returns  a peice of an array but it does not affect the original array


const myn2 = arr.splice(1,3)
console.log(myn2)
console.log("B", arr);
// splice changes the original array by removing  values from the array




const marvel = ['spiderman', ' thor', 'ironman']
const dc_heroes = [ 'superman','flash', 'batman']
//How to merge these two arrays

// marvel.push(dc_heroes) // not recommended because this makes a two dimensional array

const merged = marvel.concat(dc_heroes)
console.log(merged)

const all_new = [ ...marvel, ...dc_heroes] 
console.log(all_new)
// ... is known as spread, it opens up all the element in the array

//working with array

console.log(Array.from("Shairq")) // from makes an array of the given values

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3))  //of returns a new array from a set of elements