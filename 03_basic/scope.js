// Why is var a bad way to create a variable
// var c = 300
// if(true){
//     c=30
// }
// console.log(c) // c =30
function user(name){
    const username = name
    function greet(name){
        console.log(`Hello ${name}`)
    }
    greet(username)
}
user("Shariq")