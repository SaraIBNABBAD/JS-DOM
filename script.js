let parag = document.querySelector(".content");
let icon = document.querySelector(".head");
let symbol = document.querySelector("i");
icon.forEach(element => {
    icon[0].addEventListener("click",function(){
    parag.classList.toggle("hide");
    symbol.classList.toggle("active");
    });
})
    
    



