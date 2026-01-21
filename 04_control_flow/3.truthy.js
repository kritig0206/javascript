const user_email=null
if(user_email){
    console.log("got email")
}else{
    console.log("enter email")
}

const empty={}
if(Object.keys(empty).length==0){
    console.log("empty object")
}

let val1;
val1= 5??10;