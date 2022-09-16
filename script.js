
let btn = document.querySelector("button");
let phrase = document.querySelector(".phrase");
let auteur = document.querySelector(".auteur");

let quotee
 let url="https://type.fit/api/quotes";
    async function getQuote(){
      try {
         let quot = await fetch(url);
     quotee = await quot.json();
      } catch (error) {
         console.log(error);
      }
      randomQuote();
   }
    getQuote(url);

    function randomQuote(){
      let num = Math.floor(Math.random() * quotee.length);
     let texte=quotee[num];
    console.log(texte);
    phrase.innerText=texte.text;
    auteur.innerText=texte.author;
    }
    btn.addEventListener("click",randomQuote);