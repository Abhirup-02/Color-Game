//show a random rgb value to div
let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);
const rgb = document.getElementById('d2');
rgb.innerHTML = `RGB ( ${red} , ${green} , ${blue} )` ;

//  create array for random RGB values
   var arr=[];

document.getElementById("easy").onclick = function(){

  
  
  const collection = document.getElementsByClassName("box");
  for (let i = 0; i < collection.length - 3 ; i++) {
    for(let j = 0;j < 3 ;j++ ){
      var red = Math.floor(Math.random() * 256);
      var green = Math.floor(Math.random() * 256);
      var blue = Math.floor(Math.random() * 256);
      arr.push(red,green,blue);
  }
    collection[i].style.background = `rgb(${red},${green},${blue})`;
    collection[i].style.opacity = 1;
  }

   
   

  

  
  
  


}


document.getElementById("hard").onclick = function(){
  
  const collection = document.getElementsByClassName("box");
  for (let i = 0; i < collection.length; i++) {
    for(let i = 0 ; i < 6 ; i++ ){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    arr.push(red,green,blue);
  }
  collection[i].style.background = `rgb(${red},${green},${blue})`;
  collection[i].style.opacity = 1;
  }
  
  
}
 


