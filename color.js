document.getElementById("easy").onclick = function(){
let R=[] , G=[] , B=[];
const collection = document.getElementsByClassName("box");
for (let i = 0; i < collection.length - 3 ; i++) {
  for(let j=0 ; j<3 ; j++){
      var red = Math.floor(Math.random() * 256);
      var green = Math.floor(Math.random() * 256);
      var blue = Math.floor(Math.random() * 256);
      R.push(red),G.push(green),B.push(blue);
  }
  collection[i].style.background=`rgb(${red},${green},${blue})` ;
  collection[i].style.opacity = 1;
}
let k = Math.floor(Math.random() * 4);
document.getElementById("d2").innerHTML=`RGB ( ${R[k]} , ${G[k]} , ${B[k]} )` ;
}

document.getElementById("hard").onclick = function(){
let R=[] , G=[] , B=[];
const collection = document.getElementsByClassName("box");
for (let i = 0; i < collection.length; i++) {
  for(let j=0;j<6 ; j++){
   var red = Math.floor(Math.random() * 256);
   var green = Math.floor(Math.random() * 256);
   var blue = Math.floor(Math.random() * 256);
   R.push(red),G.push(green),B.push(blue);
  }
  collection[i].style.background = `rgb(${red},${green},${blue})`;
  collection[i].style.opacity = 1;
}
let k = Math.floor(Math.random() * 7);
document.getElementById("d2").innerHTML=`RGB ( ${R[k]} , ${G[k]} , ${B[k]} )` ;
}
  
  
  
  



