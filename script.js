let body = document.body;
let result = document.getElementById("result");
let btns = document.querySelectorAll("button");


let count = Number(result.textContent);

function addNumber(){
    console.log(count);
    result.textContent = ++count;
}

function lowNumber(){
    result.textContent = --count;
    console.log(count);
}

btns[0].addEventListener("click",addNumber); 
btns[1].addEventListener("click",lowNumber); 
