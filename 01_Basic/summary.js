//Javascript is a dynamic language

/*  Data Types are divided into two : Primitive and Non Primitive
Primitive :   String, Number, Boolean, Null, Undefined, Symbol(make componenet uniquw), BigInt(big scientific number)
*/
const score =12
const isLoggedIn = true;
const temp = null;
let userEmail = undefined
let bigNumber = 123897216489126483n; //n makes it bigInt number

const id = Symbol('123') //Symbol makjes this a unique value
console.log(id);

//Non-primitive(reference type) : array, Object, Function
// *Non primitive data type returns as an object

/*  array :*/ heroes = ['spiderman','batman','iron man']
/*  Object :*/
const myObj = {
    name : "shariq",
    age : 20
}
//Function
const myFunc = function(){
    console.log("Hello Shariq");
}