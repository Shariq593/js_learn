



MyObj = {}
if((Object.keys(MyObj)).length == 0){
    console.log("Object is Empty");
}


for( i =0;i<10;i++){
    console.log(i)
}
//break and continue

for( i =0;i<10;i++){
    if(i == 5){
        console.log("THe number is 5")
        // break; // termiante the for loop or any loops
        continue //skips to the next iteration... in this case the next iteration is 6
    }
    console.log(` This is number ${i}`);

}



//High Orders Loop

const arr = [1,2,3,4,5]

for( cosnt num of arr){
    console.log(num)
}