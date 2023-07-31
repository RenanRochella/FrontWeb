const fistNumber = document.getElementById("number1");
const secNumber = document.getElementById("number2");

const result = document.getElementById("result");

function calculo(operacao) {

    try {
        const finalResult = eval("Number(fistNumber.value)" + operacao + "Number(secNumber.value)")
        if (isNaN(finalResult) || !isFinite(finalResult)) {
            alert("Algo de errado não está certo!!!!")
            return
        }
        result.textContent = finalResult
        if(finalResult >= 100){
            result.style.color = "green"
        }else if(finalResult >= 50){
            result.style.color = "blue"
        }if(finalResult <= 0){
            result.style.color = "red"
        }

    } catch (error) {
        alert(error)
    }
}
