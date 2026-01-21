const n=[1,2,3,4];
const num= n.reduce(
    (accumalator,curr)=>{
        console.log(accumalator,curr)
        return accumalator+curr
    },0
)