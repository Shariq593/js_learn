const accountId =12342  //A const cannot be changed throughout the page
let accountEmail = "ab@xyz.com" //Used to declare a block scoped varibale
var accountPassword = "12345" // used in earlier javascript, but without scope
accountCity = "Jaipur" // An acceptable method to variable but dont use


console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity]);  

console.log(typeof (accountEmail));
/*typeof Used to check the type of the variable
2 ways:
1) console.log(typeof var)
2) console.log(typeof(var)) ~ A method*/