//for of
const arr=[1,2,3,4,5]
for (const i of arr) {
    console.log(i)
}
const s="Hello World"
for (const alphabet of s) {
    console.log(`alphabet is ${alphabet}`)
}

const map=new Map()
map.set('in',"india")
map.set('usa',"united states of america")
map.set('fr',"france")
console.log(map)
for (const [key,value] of map) {
    console.log(key,'-',value)
}