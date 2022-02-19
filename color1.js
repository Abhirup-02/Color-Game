document.getElementById("start").onclick = function(){

  var name = document.getElementById("name").value ;
  if(name == ""){
    alert("Please provide your name .");
    //keeps the user in the same page
    return false ;
  }
  else{
     alert("Hello "+name+", Have fun !");

     setTimeout(() => {
        
        //removes element from DOM
        body.style.display = 'none';


     }, 4000) ; //time in miliseconds
  }
  
}