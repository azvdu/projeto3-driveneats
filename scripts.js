let escolheuPrato
let valorPrato
let escolheuBebida
let valorBebida
let escolheuSobremesa
let valorSobremesa

let total = 0


function opcaoPrato (prato) {
    let escolha = document.querySelector(".pratos .selecionado");
    if (escolha !== null) {
        escolha.classList.remove("selecionado");
        total += -1
    }

    prato.classList.add("selecionado");

    let valor = document.querySelector(".pratos .selecionado .preco .valor")
    valorPrato = parseFloat(valor.innerHTML)

    escolheuPrato = "sim"
    
    total += 1
    ativarBotao()
}
function opcaoBebida (bebida) {
    let escolha = document.querySelector(".bebidas .selecionado");
    if (escolha !== null) {
        escolha.classList.remove("selecionado");
        total += -1
    }
    bebida.classList.add("selecionado");

    let valor = document.querySelector(".bebidas .selecionado .preco .valor")
    valorBebida = parseFloat(valor.innerHTML)

    escolheuBebida = "sim"

    total += 1
    ativarBotao()
}
function opcaoSobremesa (sobremesa) {
    let escolha = document.querySelector(".sobremesa .selecionado");
    if (escolha !== null) {
        escolha.classList.remove("selecionado");
        total += -1
    }
    sobremesa.classList.add("selecionado");

    let valor = document.querySelector(".sobremesa .selecionado .preco .valor")
    valorSobremesa = parseFloat(valor.innerHTML)

    escolheuSobremesa = "sim"

    total += 1
    ativarBotao()
}
function ativarBotao () {
    if (total === 3) {
        let ativar = document.querySelector(".botao")
        ativar.classList.remove("desativado")
        ativar.classList.add("ativo")
        ativar.innerHTML = `Finalizar Pedido`
    }
}
function finalizarPedido () {
    let pratoEscolhido = document.querySelector(".pratos .selecionado h1")
    let bebidaEscolhida = document.querySelector(".bebidas .selecionado h1")
    let sobremesaEscolhida = document.querySelector(".sobremesa .selecionado h1")
    let nome
    let endereco

    if (escolheuPrato == "sim" && escolheuBebida == "sim" && escolheuSobremesa == "sim") {
        nome = prompt("Qual o seu nome?")
        endereco = prompt("Qual seu endereço?")
    }

    let url = "https://wa.me/5583996584490?text="
    let valorTotal = ((valorPrato) + (valorBebida) + (valorSobremesa)).toFixed(2)
    let mensagem = `Olá, gostaria de fazer o pedido:\n  -Prato: ${pratoEscolhido.innerHTML}\n  -Bebida: ${bebidaEscolhida.innerHTML}\n  -Sobremesa: ${sobremesaEscolhida.innerHTML}\n Total: R$ ${valorTotal}\n  Nome: ${nome}\n  Endereço: ${endereco}`
    window.open(url + encodeURIComponent(mensagem))
}