// /* ----- get elemant by ID -------- */
// let element;
// element=document.getElementById("titre");
// console.log(element.parentNode);
// // let firstChild = element.firstChild.nodeName;
// // console.log(firstChild);
// console.log(element);
// /* ----- get elemant by className -------- */
// let paraghraph;
// paraghraph=document.getElementsByClassName("lorem");
// // paraghraph=rootElement.getElementsByClassName("lorem");
// console.log(paraghraph);
// /* ----- get elemant by css selector -------- */
// let lists;
// lists=document.querySelector("ul li");
// console.log(lists);
// /* ----- get elemant by name -------- */
// let loi;
// loi=document.getElementsByName('loisir');
// console.log(loi);
// /* ----- get elemant by tag name -------- */
// let tag;
// tag=document.getElementsByTagName('h2');
// console.log(tag);

// /* ----- element parent -------- */
// let node;
// node=document.querySelector("ul li");
// console.log(node.parentNode);


// let liist;
// liist=document.querySelector("ol li");
// let premierFrere=liist.nextElementSibling;
// console.log(premierFrere);
// let firstChild = premierFrere.firstChild.nodeName;
// console.log(firstChild);


// /* ------ afficher tout les freres suivants -------- */
// let liisit;
// liist=document.querySelector("ol li");
// let premierFrer=liist.nextElementSibling;
// while(premierFrer){
//     console.log(premierFrer);
//     premierFrer = premierFrer.nextElementSibling;
// }
// /* ------ obtenir last child ----- */
// let ordre;
// ordre=document.getElementById("order");
// console.log(ordre.lastElementChild);
// /* ------ ajouter un element ------ */
// let div = document.createElement('div');
// div.id="ajout";
// div.innerText= 'salut tout le monde ';
// document.body.appendChild(div);/* ---- pour l'affichage ------ */
// let body=document.querySelector("body");
// div.innerHTML = 'hello';

/* let input,content,button;
button=document.querySelector("button");
input = document.querySelector("input");
content = document.querySelector("#content");

function displayContent(event){
    let name = input.value;
    console.log(name);
    if (name.trim().length > 0){
        content.textContent += " " + name;
    }
    input.value = "";
}
button.addEventListener("click",displayContent);

input.addEventListener("keypress",function(event){
    console.log(event);
    if (event.key == "Enter"){
        displayContent(event);

    }
}); */

let body = document.body;
let colors = ["red","green","pink","gray","blue"];
let btn = document.querySelector("button");

function randomColor(){
    let random = Math.floor(Math.random()*colors.length);
    console.log(random);
    body.style.backgroundColor = colors[random];
}
btn.addEventListener("click",randomColor);




