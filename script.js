let parag = document.querySelector(".content");
let icon = document.querySelector("div");
let symbol = document.querySelector("i");
icon.forEach(div => {
    icon[0].addEventListener("click",function(){
    parag.classList.toggle("hide");
    symbol.classList.toggle("active");
    });
})
    
    



