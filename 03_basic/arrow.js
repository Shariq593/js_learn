//two wasys to create a function
const greet = {
    username : "Shariq",
    greeting : function(){
        console.log(` Hello  ${this.username}`)
    }
}
greet.greeting()