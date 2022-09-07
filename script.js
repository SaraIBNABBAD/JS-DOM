let body = document.body;
let result = document.getElementById("result");
let btns = document.querySelectorAll("button");


let count = Number(result.textContent);

function addNumber(){
    console.log(count);
    result.textContent = ++count;
    chnageColor();
    
}
const reset = ()=>{
    count=0;
    result.textContent = count;
    chnageColor();
    
};
function lowNumber(){
    result.textContent = --count;
    chnageColor();
    
}
function chnageColor(){
    if(result.textContent>0){
        result.style.color='blue'
    }else if (result.textContent==0){
        result.style.color='black'
    } else
        result.style.color='red'
    
}
btns[0].addEventListener("click",addNumber); 
btns[1].addEventListener("click",reset); 
btns[2].addEventListener("click",lowNumber); 
