let input = document.querySelector("input");
let body = document.querySelector("body");

function changeBackground(event){
body.style.backgroundColor = event.target.value;
}
input.addEventListener("input", changeBackground);