// When we need to iterate over an array – we can use forEach, for or for..of.

//Maps: When we need to iterate and return the data for each element – we can use map.
//Reduce : Reduce is used to get a calculate a single value from the array




const numbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = numbers.map( (num) => {
//     return num+10
// })
// console.log(newNums);

// //chaining is the concept of calling a method on another method of the same object. 
// //for eg : map(...).map(....)
// const newNum = numbers.map( (num) => num*10)
//                       .map( (num) => num+1)
//                       .filter( (num) => num>=40 )
// console.log(newNum);



// reduce

const myTotal = numbers.reduce(  (prev,curr) => {
    console.log(prev);
    return prev + curr
},10 )
console.log(myTotal)



const ShopppingCart = [
    {
        itemName: 'javascript course',
        price: 1000
    },
    {
        itemName: 'React course',
        price: 1000
    },
    {
        itemName: 'Mobile course',
        price: 2000
    },
]

const finalValue = ShopppingCart.reduce((acc,item) => acc + item.price , 0)
console.log(finalValue);