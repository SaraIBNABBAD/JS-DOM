let btn = document.querySelector("button");
let body = document.querySelector("body");
let icone = document.querySelector("i");  

btn.addEventListener("click",function(){
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        icone.classList.replace("fa-moon","fa-sun");
    }else{
        icone.classList.replace("fa-sun","fa-moon");
    }
})