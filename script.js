let btn = document.querySelector("button");
let body = document.querySelector("body");
let icone = document.querySelector("i");  

btn.addEventListener("click",function(){
    body.classList.toggle("dark");
    btn.classList.toggle("butn");
    if(body.classList.contains("dark") && btn.classList.contains("butn")){
        icone.classList.replace("fa-moon","fa-sun");
    }else{
        icone.classList.replace("fa-sun","fa-moon");
    }
})