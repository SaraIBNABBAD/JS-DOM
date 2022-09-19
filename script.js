let parag = document.getElementById("content");
let icon = document.querySelector("i");

icon.addEventListener("click",function(){
    parag.classList.toggle("hide");
    icon.classList.toggle("active");
    
})