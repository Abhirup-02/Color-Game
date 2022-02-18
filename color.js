let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);


const rgb = document.getElementById('d2');
rgb.innerHTML=`RGB ( ${red} , ${green} , ${blue} ) `;
document.getElementsById('box').style.backgroundColor = `rgb(${red},${green},${blue})` ;


