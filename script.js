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
  //   let text = "i love learning";
  // if(text.length>5){
  //   let reg = /(\w+) (\w+) (\w+)/g;
  //  console.log(text.replace(reg,"$3 $2 $1"));
  //  resolve(text);
  // }else{
  //   reject("opération invalidé");
  // }
  //  });
  //  promesse.then((text)=>{
  //   console.log(text);
  //  }).catch((erreur)=>{
  //   console.log(erreur);
  //  });

  // function remplirTab(n){
  //   let tab=[];
  //   let promesse=new Promise(function(resolve){
  //     for (let i=0;i<n+1;i++){
  //       tab[i]=i+1;
  //     }
  //     resolve(tab);
  //   });
  //   return promesse;
  // }
  // let prom = remplirTab(5);
  //   prom.then((rem) => {
  //      console.log(rem);
  //    });

  // async function afficherTab(t){
     
  //    let affichage = await remplirTab(t);
  //      console.log(affichage);
     
  // };
  // afficherTab(5);

  let url="https://jsonplaceholder.typicode.com/users";

  //  async function getData(){
  //    let data= await fetch(url);
  //    let dataa= await data.json();
  // for (let i = 0; i < 5; i++) {
  //   let info = dataa[i];
  //   console.log(info.name, info.email);
  // }
  //  }
  //   getData(url);
    
 


 fetch(url)
  .then((person) => {
    return person.json();
  })
  .then((res) => {
    for (let i = 0; i < 5; i++) {
      let person = res[i];
      console.log(person.name,person.email);
    }
  }); 

  