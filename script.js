let choix = document.querySelectorAll("input");
let condi = document.getElementById("saisir");
let text = document.querySelector("p");
let message = document.getElementById("mess");
let btn = document.querySelector("button");
let btnR = document.getElementById("restart");
let val = document.getElementById("valeur");
let viewA = document.getElementById("jouer");
let viewB = document.getElementById("rejouer");

function Aleatoire(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let entier;
let tentative;
let nbreTrouve;


function initz(min=1,max=10) {
  text.innerText = "";
  text.style.color = "black";
  entier = Aleatoire(min, max);
  tentative = 3;
  nbreTrouve = false;
  console.log(entier);
  
}

initz();

function rejouerView() {
  initz();
  viewB.style.display = "block";
  viewA.style.display = "none";
}
function jouerView() {
  viewB.style.display = "none";
  viewA.style.display = "block";
}

function devinette() {
  let nbr = Number(val.value);
  if (nbr < entier) {
    text.innerText = "plus grand";
    tentative--;
  } else if (nbr === entier) {
    text.innerText = "nombre trouvé";
    nbreTrouve = true;
  } else {
    text.innerText = "plus petit";
    tentative--;
  }
  if (tentative === 0 && nbreTrouve === false) {
    message.innerText = "Vous avez echoué";
    message.style.color = "red";
    rejouerView();
  }
  if (nbreTrouve === true) {
    message.innerText = "Vous avez bien joué";
    message.style.color = "green";
    rejouerView();
  }
  val.value = "";
  console.log(tentative);
}
choix[0].addEventListener("click",function(){
  condi.innerText = "Saisir un nombre entre 1 & 10";
  initz();
})

choix[1].addEventListener("click",function(){
  condi.innerText = "Saisir un nombre entre 10 & 100";
  initz(10,100);
})
choix[2].addEventListener("click",function(){
  condi.innerText = "Saisir un nombre entre 100 & 1000";
  initz(100,1000);
})
btn.addEventListener("click", devinette);
btnR.addEventListener("click", jouerView);



