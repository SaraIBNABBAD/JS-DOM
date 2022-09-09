 
 let choix = document.querySelectorAll("input");
 let text = document.querySelector("p");
 let btn = document.querySelector("button");
 let val = document.getElementById("valeur");

 choix[0].addEventListener("click",function(){
  text.innerText="saisir un nombre entre 1 et 10";
 });
 btn.addEventListener("click",function(){
  Devifac();
 })
 choix[1].addEventListener("click",function(){
  text.innerText="saisir un nombre entre 10 et 100";
  Devimoy();
 });
 choix[2].addEventListener("click",function(){
  text.innerText="saisir un nombre entre 100 et 1000";
  Devidef();
 });


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

 let nbr, chance;
 chance = 3;


function Devifac(){

  switch (true) {
        case (val.value > entier):
          text.innerText="plus petit";
          chance--;
          val.value="";
          break;
        case (val.value == entier):
           text.innerText="nombre trouvé";
           chance = 0;
           val.value="";
           break;
        default:
          text.innerText="plus grand";
          chance--;
          val.value="";
       }
      };
  
 
// function Devimoy(){
//   switch (true) {
//     case (val.value > entier):
//       text.innerText="plus petit";
//       chance--;
//       break;
//     case (val.value == entier):
//        text.innerText="nombre trouvé";
//        chance = 0;
//        break;
//     default:
//       text.innerText="plus grand";
//       chance--;
//    }
//   };
// function Devidef(){
//   switch (true) {
//     case (val.value > entier):
//       text.innerText="plus petit";
//       chance--;
//       break;
//     case (val.value == entier):
//        text.innerText="nombre trouvé";
//        chance = 0;
//        break;
//     default:
//       text.innerText="plus grand";
//       chance--;
//    }
//   };