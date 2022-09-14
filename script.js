// let success = true;

// let promesse = new Promise(function (resolve, reject) {
//   if (success) {
//     let a = 5;
//     let b = 25;
//     let res = a + b;
//     resolve(res);
//   } else {
//     reject("error de calcul");
//   }
// });

// promesse.then((res) => {
//   console.log(res);
// }) 
// .catch(function(failure){
//   console.log(failure);
// })


// let success = true;

// let promesse = new Promise(function (resolve, reject) {
//   if (success) {
//     let a = 5;
//     if (a % 2 == 0) {
//       resolve();
//     }
//   } else {
//     reject("Error de calcul");
//   }
// });

// promesse
//   .then((success) => {
//     console.log(success);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// function nbrePaire(nombre) {
//   let promesse = new Promise(function (resolve, reject) {
//     if (nombre % 2 == 0) {
//       let result = nombre * nombre;
//       resolve(result);
//     } else {
//       reject("le nombre est impair");
//     }
//   });
//   return promesse;
// }

// let prom = nbrePaire(3);
// prom
//   .then((resultat) => {
//     console.log(resultat);
//   })
//   .catch((erreur) => {
//     console.log(erreur);
//   })

// function sommeTab(taille){
//     let nbr=[10,39,21,8,56,30,0];
//     let somme=0;
//     let promesse=new Promise (function(resolve,reject){
//         if(taille<=nbr.length && taille>0){
//             for(let i = 0 ; i<taille ; i++){
//                 somme=somme+nbr[i];
//             }resolve(somme);
//         }else{
//             reject("ressaisir le nbr")
//         }
//     });
//     return promesse;
// }
// let prom = sommeTab(3);
//  prom.then((resultat) => {
//      console.log(resultat);
//    }).catch((erreur) => {
//      console.log(erreur);
//   });

  // let promesse = new Promise (function(resolve,reject){
    
  // });
  let text = "je m'appelle sara";
    let reg = /(\w+) (\w+) (\w+) (\w+) /;
    console.log(text.replace(reg, "$4 $3 $2 $1"));