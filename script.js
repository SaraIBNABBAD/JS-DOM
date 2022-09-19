let parag = document.getElementById("content");
let icon = document.querySelector("button");

icon.addEventListener("click",function(){
    parag.classList.toggle("hide");
    icon.classList.toggle("active");
})