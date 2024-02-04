//Immediately Invoked Function Expressions (IIFE)

// immediately invoked function are functions are thatt immediately executed
//  to avoid pollution of the global variable
//  suppose

function greet(){
    console.log("hello")
}
greet();
//but what if we want to execute the function right after initialization
 
(function greets(){  //named iife
    console.log("Hello SHariq")
})();

// ()(); Stands for iife. the first parenthesis is for the defintition 
// of the function. And the second is for calling the function
// THese functions dont know where to stop so a semicolon is required

( (name) => { // regular iife (without name)
    console.log(`Hello ${name}`)
})("Shariq Siddiqui");