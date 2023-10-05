// Função para abrir e fechar a imagem de visualização
function alternarImagem() {
    var imagem = document.getElementById("imagem-visualizacao");
    imagem.style.display = (imagem.style.display === "none" || imagem.style.display === "") ? "block" : "none";
}

// Função para fechar a imagem de visualização
function fecharImagem() {
    var imagem = document.getElementById("imagem-visualizacao");
    imagem.style.display = "none";
}
