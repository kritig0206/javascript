const user={
    username:"Kriti",
    price:199,
    welcome_message: function(){
console.log(`${this.username},welcome to website`)
console.log(this)
    }

}
//user.welcome_message();
//user.username="sam"
//user.welcome_message();
//console.log(this)

//function chai(){
  //  let username="Hitesh"
    //console.log(this.username)
//}
//chai()
const chai = ()=>{
    let username="chai"
    console.log(username)
}
//chai()
const addtwo=(a)=>{
return a+2
}
//console.log(addtwo(2));
const add=(a,b)=> a+b
console.log(add(2,3))