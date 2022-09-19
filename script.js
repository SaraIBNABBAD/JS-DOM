
let parg = document.getElementById("content");
let icone = document.querySelector("button");

icone.addEventListener("click",function(){
  parg.classList.toggle("hide");
  icone.classList.toggle("active");
});
