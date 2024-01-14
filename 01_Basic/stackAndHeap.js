/* Stack if for Primitive Data Type 
   Heap is for Non Primitive Data Type
*/
   let name1 ="Shariq";
   let name2 = name1
    name2 = "Siddiqui"
    console.log(name1);
    console.log(name2);

let userOne = {
    email : "Shaqriq@1dkfnjh.com",
    upi :"21321343421@unl"
}
let userTwo = userOne;

userTwo.email = "abc@xyz.com"
console.log(userOne.email);
console.log(userTwo.email);

// both objects Email was changed because Heap memory gives direct reference 
//while Stack memory gives a copy of the variable
