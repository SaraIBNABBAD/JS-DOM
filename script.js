
let parg = document.getElementById("content");
let icone = document.querySelectorAll("button");

icone[0].addEventListener("click",liste);
icone[1].addEventListener("click",liste);

function liste(){
  parg.classList.toggle("hide");
  icone.classList.toggle("active");
}