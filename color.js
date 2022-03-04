var r = [],g = [], b = [];
var ans_index, ans, diff=3;

function setColor(x = 3) {
  const rgb_div = document.querySelector("#rgb");
  generate(x);
  rgb_div.innerHTML = `RGB ( ${r[ans_index]} , ${g[ans_index]} , ${b[ans_index]} )`;
  setBoxes(x);
}

function generate(x = 3) {
  for (let i = 0; i < 6; i++) {
    r[i] = Math.floor(Math.random() * 256);
    g[i] = Math.floor(Math.random() * 256);
    b[i] = Math.floor(Math.random() * 256);
  }
  ans_index = Math.floor(Math.random() * x);
  ans = "rgb(" + r[ans_index] + ", " + g[ans_index] + ", " + b[ans_index] + ")";
}
function setBoxes(x = 3) {
    const main = document.querySelector("#main");
    main.innerHTML = "";
    for (let i = 0; i < x; i++) {
      var box = document.createElement("div");
      box.classList.add("box");
      box.setAttribute("onclick", "verify(this.style.backgroundColor)");
      box.style.backgroundColor = `rgb(${r[i]},${g[i]},${b[i]})`;
      main.appendChild(box);
    }
  }
  function setState(x=diff) {
    diff = x;
    setColor(x);
  }
  setColor();
  function verify(color) {
    if (color == ans) {
      document.getElementById("try").innerHTML="You Won :)" ;
      } else {
      document.getElementById("try").innerHTML="You Lost :( " ; 
      
    }
  } 