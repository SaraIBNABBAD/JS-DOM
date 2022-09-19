let btns = document.querySelectorAll("button");
let like = document.querySelector(".like");
let dislike = document.querySelector(".dislike");
let image = document.querySelector("img");

let count=localStorage.getItem("count")==null? 0 :localStorage.getItem("count");
let compte=localStorage.getItem("compte")==null? 0 :localStorage.getItem("compte");

/* ---- click like avec btn----- */
like.textContent=count;
btns[0].addEventListener("click",function(){
    count++;
    like.textContent=count;
localStorage.setItem("count",count);
    
})
/* ---- click dislike avec btn----- */
dislike.textContent=compte;
btns[1].addEventListener("click",function(){
    compte++;
    dislike.textContent=compte;
    localStorage.setItem("compte",compte);
})

/* ---- double-click like avec img----- */
like.textContent=count;
image.addEventListener("dblclick",function(){
    count++;
    like.textContent=count;
    localStorage.setItem("count",count);
})
