// A function is a set of statements that perform a specific task

function sayMyName() {
    console.log("Heisenberg")
}
sayMyName()

function addTwoNumbers(num1,num2){
    let res = num1 +num2
    return res
    // console.log("sharoq") js dont read anything psat return statement
}
const res  = addTwoNumbers(3,5)
console.log(res);

function loginUserMessage(username){
    if(!username){
        return `Enter a valid username`
    }
    return `${username} just logged in`
    
}

console.log(loginUserMessage());

// function CalulateCart (num1){ What if the user gave more args than in the paremeter
// to clear this, we use the (...) rest operator. it allows to combine multiple elemets into one single array or object
function CalulateCart (...num1){
    return num1

}

console.log(CalulateCart(400,500,700))



const CalculateCart = {
    name :"Shariq",
    price : 400
}
 function objHello (someObj){
    return console.log(`Hii, ${someObj.name}, Your cart value is ${someObj.price} `)
 } 
 objHello(CalculateCart)