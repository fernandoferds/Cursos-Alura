const botao = document.querySelector("#calcular")
const resultado = document.querySelector(".resultado");
const resultado2 = document.querySelector(".resultado2");
botao.addEventListener("click", () => {
    resultado.innerHTML = "Fui clicado"
    resultado2.innerHTML = "Fui clicado"
})