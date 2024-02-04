const coding = [
    {
        language_name : 'javascript',
        language_type : 'Generic Programming'
    },
    {
        language_name : 'Java',
        language_type : 'Object Oriented programming Language'
    }
]
// coding.forEach( (items) => {
//         console.log(items.language_name)
// })

// const values = coding.forEach( (items) => {
//     console.log(items.language_name)
//     return items
// })
// console.log(values) //undefined


//filter n
const myNums = [1,2,3,4,5,6,7,8,9,10] 
// const newNums = []

// myNums.forEach( (num) => {
//     if( num>5){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

    // ANOTHER WAY : 

// const newNums = myNums.filter(  (num) => {
//     return num>4
// })
// console.log(newNums);

const books = [
    { title: 'one',genre: 'history'
    },
    { title: 'dfgs',genre: 'history'
    },
    { title: 'jdgf',genre: 'history'
    },
    { title: 'two',genre: 'fiction'
    },
    { title: 'three',genre: 'science'
    },
    { title: 'four',genre: 'non-fiction'
    }
    
]

const userBooks = books.filter( (bk) => bk.genre == 'history' )
console.log(userBooks)