// const JsUser = new object()
const iUser ={}
iUser.id = "abd123"
iUser.name = "Shariq"
iUser.isLoggedIn = false

//object inside an object
const regularUser = {
    email : "some@google.com",
    fullname : {
        userfullname: {
            firstname : "Shariq",
            LastName : "Siddiqui"
        }
    }
}

// console.log(`${regularUser.fullname.userfullname.firstname} ${regularUser.fullname.userfullname.LastName}` )

const obj1 = { 1: 'A', 2:'B', 3: 'C'}
const obj2 = { 4:'D', 5:'E',6:'G'}

// const obj3 = Object.assign({}, obj1,obj2) 
//Assign copies the values from one, two or more objects, returns a target object
//syntax Object.assign(target,source)

const obj3 = {...obj1,...obj2} // most used way
console.log(obj3)

//Some scnerios include that you need to loop over an object
console.log(Object.keys(iUser))
console.log(Object.values(iUser))

//To check if a property is available in the object
console.log(iUser.hasOwnProperty("name"))