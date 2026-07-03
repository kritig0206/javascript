let intervalID;
const startChangingcolor=function(){
  if(!intervalID){
  intervalID=setInterval(Changebgcolor,1000)
  }
 function Changebgcolor() { document.body.style.backgroundColor=randomcolor()
 }
}
const stopChangingcolor=function(){
clearInterval(intervalID)
intervalID=null;
}
document.querySelector("#start").addEventListener('click',startChangingcolor)
document.querySelector("#stop").addEventListener('click',stopChangingcolor)