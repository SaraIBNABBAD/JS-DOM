
let parg = document.getElementById("content");
let icones = document.querySelectorAll("button");

icones[0].addEventListener("click",function(){
    parg.classList.toggle("hide");
    
        icones.classList.toggle("active");
    
});
icones[2].addEventListener("click",function(){
  parg.classList.toggle("hide");
  
      icones.classList.toggle("active");
  
});

