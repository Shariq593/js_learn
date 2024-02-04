const mySym = Symbol("key1")

const JsUser = {
    name : "shariq",
    "full name": " Shariq Siddiqui",
    [mySym] : "mykey1",
    age: 19,
    location : "pune",
    isLoggedIn : true,

}
// Two ways to acces object 
console.log(JsUser.age)
console.log(JsUser["age"]) // mos used way
console.log(JsUser["fullname"])

//how to use symbol in an object, and access it **INterview question
console.log(typeof JsUser[mySym])


JsUser.age = 20 // Change the values

JsUser.greeting = function(){   // Add a function in the object
    console.log("Hello Js User")
}

JsUser.greeting2 = function(){   
    console.log(`Hello Js User ${this["full name"]}`) //access a value in the same object
}

console.log(JsUser.greeting2())
console.log(JsUser.greeting())

Object.freeze(JsUser) // This freeze the object, and make it unchangeable




