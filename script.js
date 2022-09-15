
let btn = document.querySelector("button");
let phrase = document.querySelector(".phrase");
let auteur = document.querySelector(".auteur");


 let url="https://type.fit/api/quotes";
    async function getQuote(){
     let quot = await fetch(url);
     let quotee = await quot.json();
     let num = Math.floor(Math.random() * quotee.length);
     let texte=quotee[num];
    console.log(texte);
    phrase.innerText=texte.text;
    auteur.innerText=texte.author;
   }
    getQuote(url);
    btn.addEventListener("click",getQuote);