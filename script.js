
let parg = document.getElementById("content");
let icone = document.querySelector("i");

icone.addEventListener("click",function(){
    parg.classList.toggle("hide");
    if(parg.classList.contains("hide")){
        icone.classList.replace("fa-minus","fa-plus");
    }else{
        icone.classList.replace("fa-plus","fa-minus");
    }
});

