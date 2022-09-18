let btns = document.querySelectorAll("button");
let like = document.querySelector(".like");
let dislike = document.querySelector(".dislike");
let image = document.querySelector("img");

let count=0;
let num=0;
btns[0].addEventListener("click",function(){
    count++;
    like.textContent=count;
})
btns[1].addEventListener("click",function(){
    num++;
    dislike.textContent=num;
})
image.addEventListener("dblclick",function(){
    count++;
    like.textContent=count;
})