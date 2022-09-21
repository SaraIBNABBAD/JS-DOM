let parag = document.querySelector(".content");
let icon = document.querySelector("button");
let symbol = document.querySelector("i");
icon.forEach(button => {
    button.addEventListener("click",function(){
    parag.classList.toggle("hide");
    symbol.classList.toggle("active");
    });
})
    
    



