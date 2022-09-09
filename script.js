 
 let choix = document.querySelectorAll("input");

 choix[0].addEventListener("click",Devifac);
 choix[1].addEventListener("click",Devimoy);
 choix[2].addEventListener("click",Devidef);
 function Aleatoire(min, max)
 {
  return Math.floor(Math.random() * (max - min)) + min;
}
 let entier = Aleatoire(1, 10);
 console.log(entier);

 function AleatoireA(min, max)
 {
  return Math.floor(Math.random() * (max - min)) + min;
}
 let entiera = AleatoireA(10, 100);
 console.log(entiera);

 function AleatoireB(min, max)
 {
  return Math.floor(Math.random() * (max - min)) + min;
}
 let entierb = AleatoireB(100, 1000);
 console.log(entierb);

 let nbr, chance;
 chance = 3;


function Devifac(){
  switch (true) {
        case (nbr > entier):
          alert("plus petit");
          chance--;
          break;
        case (nbr == entier):
           alert("nombre trouvé");
           chance = 0;
           break;
        default:
          alert("plus grand");
          chance--;
       }
};

function Devimoy(){
  switch (true) {
        case (nbr > entiera):
          alert("plus petit");
          chance--;
          break;
        case (nbr == entiera):
           alert("nombre trouvé");
           chance = 0;
           break;
        default:
          alert("plus grand");
          chance--;
       }
};

function Devidef(){
  switch (true) {
        case (nbr > entierb):
          alert("plus petit");
          chance--;
          break;
        case (nbr == entierb):
           alert("nombre trouvé");
           chance = 0;
           break;
        default:
          alert("plus grand");
          chance--;
       }
}
