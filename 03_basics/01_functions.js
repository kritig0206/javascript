function name(){
    console.log("H")
    console.log("e")
    console.log("l")
    console.log("l")
    console.log("o")
}
//name();
//function add(a,b){
   // console.log(a+b) 
//}
//add(5,7)
add("Hi"," bye");
function add(a,b){
    let c= a+b
    return c
}
let result=add(1,2);
//console.log(result)

function loginuser(username="you"){
    if(username===undefined){
console.log("please enter username")
return
    }
return `${username} is now logged in`
}
//console.log(loginuser())

function CalculateCartPrice(...num1){
return num1
}
//console.log(CalculateCartPrice(200,400,500))

let user={
    username:"Kriti",
    price:199
}
function handle(anyobject){
console.log(`username is ${anyobject.username} and price is ${anyobject.price}` )
}
handle(user);