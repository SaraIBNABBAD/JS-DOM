 
 let choix = document.querySelectorAll("input");
 let text = document.querySelector("p");
 let btn = document.querySelector("button");
 let btnR = document.getElementById("restart");
 let val = document.getElementById("valeur");

 choix[0].addEventListener("click",function(){
  text.innerText="saisir un nombre entre 1 et 10";
 });
 btn.addEventListener("click",Devifac);

//  choix[1].addEventListener("click",function(){
//   text.innerText="saisir un nombre entre 10 et 100";
//  });
//  btn.addEventListener("click",function(){
//   Devimoy();
//  });
//  choix[2].addEventListener("click",function(){
//   text.innerText="saisir un nombre entre 100 et 1000";
//  });
//  btn.addEventListener("click",function(){
//   Devidef();
//  });


 function Aleatoire(min, max)
 {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
 let entier = Aleatoire(1, 10);
 console.log(entier);

//  let entiera = Aleatoire(10, 100);
//  console.log(entiera); 

//  let entierb = Aleatoire(100, 1000);
//  console.log(entierb);
let chance;
let nbrTrouve;
let message;
function init() {
  chance = 3;
  nbrTrouve = false;
  entier = Aleatoire(1, 10);
  text.textContent = "";
}

function rejouerView() {
  document.querySelector("#rejouer").style.display = "block";
  document.querySelector("#jouer").style.display = "none";
}
function jouerView() {
  init();
  document.querySelector("#rejouer").style.display = "none";
  document.querySelector("#jouer").style.display = "block";
}
init();
function Devifac(){
 let nbr = Number(val.value);
  if (nbr<entier){
    text.innerText="plus grand";
    val.value="";
    chance--;
  }else if(nbr===entier){
    text.innerText="nombre trouvé";
    nbrTrouve=true;
    val.value="";
  }else{
    text.innerText="plus petit";
    chance--;
    val.value="";
  }
       if(chance===0 && nbrTrouve===false){
        text.innerText="echoué";
        text.style.color="red";
        rejouerView();
       }
       if(nbrTrouve===true){
        text.innerText="bien joué";
        text.style.color="green";
        rejouerView();
       }
      };
      btnR.addEventListener("click", jouerView);
