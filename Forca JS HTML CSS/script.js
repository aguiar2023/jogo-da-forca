const palavras = ["banana", "carro", "casa", "computador", "programacao"]; // Lista de palavras
let palavraSecreta = "";
let letrasChutadas = [];
let erros = 0;

function sortearPalavra() {
    palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)].toUpperCase();
    console.log(palavraSecreta); // Debug: mostrar a palavra secreta no console
    mostrarPalavraSecreta();
}

function mostrarPalavraSecreta() {
    let palavra = "";
    for (let letra of palavraSecreta) {
        if (letrasChutadas.includes(letra)) {
            palavra += letra;
        } else {
            palavra += "_ ";
        }
    }
    document.getElementById("palavra-secreta").textContent = palavra;
}

function chutar() {
    const chute = document.getElementById("chute").value.toUpperCase();
    resetarMensagem();

    if (chute === "") {
        exibirMensagem("Digite uma letra!");
        return;
    }

    if (letrasChutadas.includes(chute)) {
        exibirMensagem("Você já chutou essa letra!");
        return;
    }

    letrasChutadas.push(chute);
    document.getElementById("letras-erradas").textContent = letrasChutadas.join(", ");

    if (palavraSecreta.includes(chute)) {
        atualizarPalavraSecreta();
        verificarVitoria();
    } else {
        erros++;
        desenharBoneco();
        verificarDerrota();
    }

    document.getElementById("chute").value = "";
}

function atualizarPalavraSecreta() {
    for (let i = 0; i < palavraSecreta.length; i++) {
        if (palavraSecreta[i] === letrasChutadas[letrasChutadas.length - 1]) {
            document.getElementById("palavra-secreta").children[i].textContent = palavraSecreta[i];
        }
    }
}

function desenharBoneco() {
    // Desenhe as partes do boneco de acordo com o número de erros (cabeça, tronco, braços, pernas, etc.)
}

function verificarVitoria() {
    if (document.getElementById("palavra-secreta").textContent.replace(/ /g, "") === palavraSecreta) {
        exibirMensagem("Parabéns! Você venceu!");
        document.getElementById("chute").disabled = true;
    }
}

function verificarDerrota() {
    if (erros >= 6) {
        exibirMensagem("Você perdeu! A palavra era: " + palavraSecreta);
        document.getElementById("chute").disabled = true;
    }
}

function resetarMensagem() {
    document.getElementById("mensagens").textContent = "";
}

function exibirMensagem(mensagem) {
    document.getElementById("mensagens").textContent = mensagem;
}

