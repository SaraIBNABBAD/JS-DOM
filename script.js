 
 let choix = document.querySelectorAll("input");
 let text = document.querySelector("p");
 let btn = document.querySelector("button");
 let btnR = document.getElementById("restart");
 let val = document.getElementById("valeur");
let viewA = document.getElementById("jouer");
let viewB = document.getElementById("rejouer");

 function Aleatoire(min, max)
 {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let entier = Aleatoire(1, 10);;
console.log(entier);


  let tentative= 3;
  let nbreTrouve = false;
  


function rejouerView() {

  viewB.style.display = "block";
  viewA.style.display = "none";
}
function jouerView() {
 
  viewB.style.display = "none";
  viewA.style.display = "block";
}


function devinFacil(){
 let nbr = Number(val.value);
  if (nbr < entier){
    text.innerText="plus grand";
    tentative--;
  }else if(nbr === entier){
    text.innerText="nombre trouvé";
    nbreTrouve=true;
  }else{
    text.innerText="plus petit";
    tentative--;
  }
       if(tentative === 0 && nbreTrouve === false){
        text.innerText="Vous avez echoué";
        text.style.color="red";
        rejouerView();
       }
       if(nbreTrouve === true){
        text.innerText="Vous avez bien joué";
        text.style.color="green";
        rejouerView();
       }
       val.value="";
      };
          btn.addEventListener("click",devinFacil);
          btnR.addEventListener("click",jouerView);