let a=300;
if(true){
let a=10;
const b=20;
//var c=30;
console.log("Inner ",a)
}
console.log(a)
//console.log(b)
//console.log(c)//only this will print also in case of c=30


function add_one(value){
    return value + 1
}
add_one(5);

const addtwo = function(val){
    return val+2;
}

addtwo(5)