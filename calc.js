const fistNumber = document.getElementById("number1");
const secNumber = document.getElementById("number2");

const result = document.getElementById("result");

function calculo(operacao){

    if(operacao === "somar"){
        
        result.textContent = 
        Number(fistNumber.value) 
        + Number(secNumber.value)

    } else if(operacao === "sub"){

        result.textContent = 
        Number(fistNumber.value) 
        - Number(secNumber.value)
        
    } else if(operacao === "mult"){

        result.textContent = 
        Number(fistNumber.value) * 
        Number(secNumber.value)
        
    } else if(operacao === "divd"){

        result.textContent = 
        Number(fistNumber.value) 
        / Number(secNumber.value)
        
    } else{
        alert("Não conheço . . .")
    }

}
