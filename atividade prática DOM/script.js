function mostrarCidade() {
    let cidadeDigitada = document.getElementById("cidade").value;
    let mensagemP = document.getElementById("mensagem");
    
    mensagemP.textContent = `Você escolheu conhecer ${cidadeDigitada}! 🌴`;
}

let btnEstilo = document.getElementById("btnEstilo");

btnEstilo.addEventListener("click", function() {
    let mensagemP = document.getElementById("mensagem");
    
    mensagemP.style.color = "blue";
    mensagemP.style.fontSize = "20px";
    mensagemP.style.backgroundColor = "#ffeb3b";
});

let valorContador = 10;
let spanContador = document.getElementById("contador");

document.getElementById("btnMais").addEventListener("click", function() {
    valorContador++;
    spanContador.textContent = valorContador;
});

document.getElementById("btnMenos").addEventListener("click", function() {
    valorContador--;
    spanContador.textContent = valorContador;
});