let space=document.getElementById("quote");
let btn = document.querySelector("button");

function getQuote(){
  let quote=quote[Math.floor(Math.random() * quote.length)];
 space.innerText=quote;
}
btn.addEventListener("click",getQuote);

 let url="https://jsonplaceholder.typicode.com/users";