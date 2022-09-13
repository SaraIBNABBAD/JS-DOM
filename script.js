// let form=document.querySelector("form");
// let nom =form.elements['nom'];
// let prenom=form.elements['prenom'];
// console.log(nom.value);
// console.log(prenom.value);
// let char=/^[a-zA-Z-\s]+$/;
// form.addEventListener('submit',function(event){
//     event.preventDefault();
//     if(nom.value.length==0){
//         let error=document.getElementById("error");
//         error.innerText="Le champs est obligatoire veuillez le remplir !";
//         error.style.color="red";
//     }else if (char.test(nom.value)=false){
//         error.innerText="Le champs est obligatoire veuillez le remplir !";
//         error.style.color="red";
//         event.preventDefault();
//     }
// })
let email="sara-9@testt.com";
let char=/^[a-zA-Z0-9-_]+@[a-zA-Z]{4,}\.[a-zA-Z]+$/;
console.log(char.test(email));

// let MdP="Sar-a@2";
// let char=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{6,12})$/;
// console.log(char.test(MdP));
// const text = "i love you and all"
// const regex = /(\w+) (\w+) (\w+) (\w+)/;
// console.log(text.match(regex));

// console.log(text.replace(regex, "$4 $1"));

// function checkEmail(field){
//     let char=/^[a-zA-Z0-9-]+@[a-zA-Z]{4,}\.[a-zA-Z]+$/;
// }