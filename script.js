let form=document.querySelector("form");
let nmm =form.element['nom'];
let pnom=form.element['prenom'];
console.log(nmm.value);
console.log(pnom.value);
let char=/^[a-zA-Z-\s]$/;
form.addEventListener('submit',function(event){
    event.preventDefault();
    if(nmm.value.length==0){
        let error=document.getElementById("error");
        error.innerText="Le champs est obligatoire veuillez le remplir !";
        error.style.color="red";
    }else if (char.test(nmm.value)=false){
        error.innerText="Le champs est obligatoire veuillez le remplir !";
        error.style.color="red";
    }
})
