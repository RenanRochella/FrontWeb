const fistNumber = document.getElementById("number1");
const secNumber = document.getElementById("number2");

const result = document.getElementById("result");

function calculo(operacao){

    const finalResult = eval("Number(fistNumber.value)"+ operacao +"Number(secNumber.value)")

    if(isNaN(finalResult)){
        alert("Algo de errado não está certo!!!!")
        return
    }

    result.textContent = finalResult

}
