let btns = document.querySelectorAll("button");
let output = document.querySelector("#ecran");
let clear = document.querySelector("#reset");

let waitscdValue = false;
let frstValue=0;
let nombreDecimal=false;
let sign="";
output.textContent=frstValue;
btns.forEach((button=>{
    button.addEventListener("click",()=>{
        if(button.classList.contains("chiffre")){
            let content=button.value;
        
        if (waitscdValue) {
            output.textContent = "";
            waitscdValue = false;
          }
          if (output.textContent == "0"){
            output.textContent = content;
          }else{
            output.textContent += content;
          } 
        }
          else if(button.classList.contains("decimal")){
            if(nombreDecimal==false){
                output.textContent += ".";
                nombreDecimal=true;
            }
          }else if(button.classList.contains("signe")){
            frstValue=Number(output.textContent);
            sign=button.value;
            output.textContent += sign;
            waitscdValue = true;
            nombreDecimal=false;
          }else if(button.classList.contains("egal")){
            let scdValue=Number(output.textContent);
            let res=0;
            switch (sign) {
                case "+":
                    res=frstValue+scdValue;
                    break;
                    case "×":
                    res=frstValue*scdValue;
                    break;
                    case "-":
                        res=frstValue-scdValue;
                        break;
                        case "÷":
                            res=frstValue/scdValue;
                            break;
                default:
                    res=scdValue;
                    break;
            }
            output.textContent=res;
          }
       
    })
}))

function reset(){
 waitscdValue = false;
 frstValue=0;
 nombreDecimal=false;
 sign="";
output.textContent=frstValue;
}
clear.addEventListener("click",reset);