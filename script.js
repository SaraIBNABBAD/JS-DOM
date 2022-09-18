let btns = document.querySelectorAll("button");
let like = document.querySelector(".like");
let dislike = document.querySelector(".dislike");
let image = document.querySelector("img");

let count=0;
let compte=0;
btns[0].addEventListener("click",function(){
    count++;
    like.textContent=count;
    if (localStorage.count) {
        localStorage.count = Number(localStorage.count)+1;
      } else {
        localStorage.count = 1;
      }
      like.textContent = localStorage.count;
})
btns[1].addEventListener("click",function(){
    compte++;
    dislike.textContent=compte;
    if (localStorage.compte) {
        localStorage.compte = Number(localStorage.compte)+1;
      } else {
        localStorage.compte = 1;
      }
      dislike.textContent = localStorage.compte;
})
image.addEventListener("dblclick",function(){
    count++;
    like.textContent=count;
    if (localStorage.count) {
        localStorage.count = Number(localStorage.count)+1;
      } else {
        localStorage.count = 1;
      }
      like.textContent = localStorage.count;
})

// const sauvgarde = {
//     "lik" : count,
//     "dislk" : compte,
// }
// let save = JSON.stringify(sauvgarde);
// localStorage.setItem("sauvgarde",save);