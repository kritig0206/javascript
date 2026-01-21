const Tinderuser=new Object();
//const Tinderuser={};
console.log(Tinderuser)

Tinderuser.id=123;
Tinderuser.name="Sam";
Tinderuser.isloggedIn=false;

//console.log(Tinderuser);

const user={
    email:"Kritig0206@gmail.com",
    fullname:{
        userfullname:{
 first:"kriti",
 last:"gera"
        }
    }
}
//console.log(user.fullname.userfullname.first)
const obj1={ 0:"a",1:"b",2:"c"}
const obj2={ 3:"d",4:"e",5:"f"}
//const obj3=Object.assign({},obj1,obj2)
//console.log(obj3)

const obj3={...obj1,...obj2}
//console.log(obj3)

const users=[
{
id:1,
name:"Kriti"
},
{
    id:2,
    name:"Lavya"
},
{
    id:3,
    name:"Ritu"
}
]
//console.log(users[1].name);
//console.log(Object.keys(user))
//console.log(Object.values(users));
//console.log(Object.entries(users));

//console.log(users.hasOwnProperty('email'))

const course={
coursename:"JAVASCRIPT",
course_price:9999,
course_teacher:"Hitesh"
}