 
 let choix = document.querySelectorAll("input");
 let text = document.querySelector("p");
 let btn = document.querySelector("button");
 let val = document.getElementById("valeur");

 choix[0].addEventListener("click",function(){
  text.innerText="saisir un nombre entre 1 et 10";
 });
 btn.addEventListener("click",function(){
  Devifac();
 });

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
  return Math.floor(Math.random() * (max - min)) + min;
}
 let entier = Aleatoire(1, 10);
 console.log(entier);

 let entiera = Aleatoire(10, 100);
 console.log(entiera); 

 let entierb = Aleatoire(100, 1000);
 console.log(entierb);

 
 let chance = 3;
 let nbrTrouve = false;

function Devifac(){
 let nbr = Number(val.value);
  switch (true) {
        case (nbr > entier):
          text.innerText="plus petit";
          chance--;
          nbr="";
          break;
        case (nbr === entier):
           text.innerText="nombre trouvé";
           chance = 0;
           nbr="";
           break;
        default:
          text.innerText="plus grand";
          chance--;
          nbr="";
       }
      };
  
 
// function Devimoy(){
//   switch (true) {
//     case (nbrSaisie > entiera):
//       text.innerText="plus petit";
//       chance--;
//       nbrSaisie="";
//       break;
//     case (nbrSaisie === entiera):
//        text.innerText="nombre trouvé";
//        chance = 0;
//        nbrSaisie="";
//        break;
//     default:
//       text.innerText="plus grand";
//       chance--;
//       nbrSaisie="";
//    }
//   };
// function Devidef(){
//   switch (true) {
//     case (val.value > entierb):
//       text.innerText="plus petit";
//       chance--;
        //  val.value="";
//       break;
//     case (val.value == entierb):
//        text.innerText="nombre trouvé";
//        chance = 0;
// val.value="";
//        break;
//     default:
//       text.innerText="plus grand";
//       chance--;
// val.value="";
//    }
//   };