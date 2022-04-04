function opcaoPrato (prato) {
    let selecionado = document.querySelector(".prato .selecionado");
    // prato.classList.toggle("selecionado");
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado")
    }
    prato.classList.add("selecionado")
}
function opcaoBebida (bebida) {
    let selecionado = document.querySelector(".bebida .selecionado");
    // prato.classList.toggle("selecionado");
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado")
    }
    bebida.classList.add("selecionado")
}
function opcaoSobremesa (sobremesa) {
    let selecionado = document.querySelector(".sobremesa .selecionado");
    // prato.classList.toggle("selecionado");
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado")
    }
    sobremesa.classList.add("selecionado")
}