const myDate= new Date()
console.log(myDate.toLocaleString())

let s=Date.now();
console.log(s);

let d1=new Date(2025,0,9);
let d2=new Date(2026,0,9);
diff=d2-d1;
let days= diff/(1000*60*60*24);
console.log(days);