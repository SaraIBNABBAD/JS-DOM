let inputs = document.querySelectorAll("input");


inputs[0].addEventListener("input",function(){
    setLinear(inputs[0].value,inputs[1].value);
});
inputs[1].addEventListener("input",function(){
    setLinear(inputs[0].value,inputs[1].value);
});



function  setLinear(color1,color2){
    document.body.style.background=`linear-gradient(to right, ${color1},${color2})`;
}