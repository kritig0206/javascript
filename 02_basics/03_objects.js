let Sym= Symbol("key");

const user={
name:"Kriti",
age: 18,
[Sym]:"Key",
location:"Delhi",
email:"kritig0206@gmail.com",
isLoggedin:true,
lastlogindays:["monday","tuesday"]
}
console.log(user.name);
 console.log(user["name"]);
  console.log(user[Sym]);
   console.log(typeof user[Sym]) 
   user.location="Ahemdabad"; 
   console.log(user.location) 
   //object.create

user.greeting=function(){
console.log(`hello user, ${this.name}`)
}
console.log(user.greeting())