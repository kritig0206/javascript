const m_heros=["thor","ironman","spiderman"];
const dc_heros=["superman","flash","batman"];

//m_heros.push(dc_heros);
//console.log(m_heros);
//console.log(m_heros[3][1]);
//const arr=m_heros.concat(dc_heros)
//console.log(arr)

const newarr=[...dc_heros,...m_heros];
//console.log(newarr)

const another=[1,2,[3,4],7,[5,7]]
const usable= another.flat(1);
//console.log(usable);

console.log(Array.isArray("Kriti"))
console.log(Array.from("Kriti"))

let h=1;
let b=2;
let c=3

let a=Array.of(h,b,c)
console.log(a)
