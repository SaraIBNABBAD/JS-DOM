let inputa = document.getElementById("taille");
let inputb = document.getElementById("poids");
let btn = document.querySelector("button");
let result = document.querySelector("h2");

btn.addEventListener("click",function(){
    let taille=Number(inputa.value)/100;
    let poids=Number(inputb.value);
    let res=(poids/(taille*taille)).toFixed(2);
    console.log(res);
    result.textContent=res
})
