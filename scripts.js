function opcaoPrato (prato) {
    let escolha = document.querySelector(".pratos .selecionado");
    if (escolha !== null) {
        escolha.classList.remove("selecionado")
    }
    prato.classList.add("selecionado")
}
function opcaoBebida (bebida) {
    let escolha = document.querySelector(".bebidas .selecionado");
    if (escolha !== null) {
        escolha.classList.remove("selecionado")
    }
    bebida.classList.add("selecionado")
}
function opcaoSobremesa (sobremesa) {
    let escolha = document.querySelector(".sobremesa .selecionado");
    if (escolha !== null) {
        escolha.classList.remove("selecionado")
    }
    sobremesa.classList.add("selecionado")
}

