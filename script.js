const titulo = document.getElementById("titulo");
const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const foneInput = document.getElementById("fone");

const resultadoNome = document.getElementById("result-nome")
const resultadoEmail = document.getElementById("result-email")
const resultadoFone = document.getElementById("result-fone")

titulo.textContent = "Senai Cotia 2023";

function save() { 
    resultadoNome.textContent = nomeInput.value
    resultadoEmail.textContent = emailInput.value
    resultadoFone.textContent = foneInput.value
}