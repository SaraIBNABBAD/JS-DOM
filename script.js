let content = document.querySelector("#content");
let ajout=document.querySelector("button");
let body = document.querySelector("body")
ajout.addEventListener("click",function(){
    console.log(content.value);
    let list= document.createElement("li");
    list.textContent = content.value;
    let ul = document.createElement("ul");
    body.appendChild(ul);
    ul.appendChild(list);
    content.value = "";
})
content.addEventListener("keypress",function(a){
    if(a.key=="Enter"){
        if(content.value.length>0){
            let list= document.createElement("li");
    list.textContent = content.value;
    let ul = document.createElement("ul");
    body.appendChild(ul);
    ul.appendChild(list);
    content.value = "";
        }else{
            alert("Remplir le champ");
        }
    }
})

