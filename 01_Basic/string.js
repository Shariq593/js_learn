// String Interpolation _ it is used to inject javascript into a string
//  `` is used to string interpolation 
name  ="Shariq"
console.log(`My name is ${name} and  Im ${10+10} year`);


const GameName = "Shariq-Siddiqui"
// console.log(GameName.length); GIives the length of the string
// console.log(GameName.toUpperCase); return the string in uppercase


//To check and verify characters
console.log(GameName.charAt(2)); // returns the index of the charater
console.log(GameName.indexOf('u'));


//Splits the string
const newString = GameName.substring(0,4) // creates a substring. it takes start and end index
//Here the 4th index doesnt get printed. Please note

const anotherSlice = GameName.slice(-2,4) // slice is same as substring but it can take negative values, and negative values reverses 



const NewStringOne = "    Shariq Siddiqui       ";
console.log(NewStringOne.trim()); // Removes the blank spaces in the beggining and in the end




const url = "https://google.com/shariq%20siddiqui"
console.log(url.replace('%20', '-')); // .replace replaces a substring with nother substring

console.log(url.includes('siddiqui')) //checks if the substring is included in the string


// splits the array by a taking a character and returns an array
console.log(GameName.split('-')); 