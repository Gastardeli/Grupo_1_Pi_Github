
chkCadProd = false;

function cadastrarProduto() {
    var produto = input_produto.value;
    var validade = input_dtValidade.value;
    var fabricante = input_fabricante.value;
    var fabricacao = input_dtFab.value;
    var compraLote = Number(input_compraLote.value);
    var vendaLote = Number(input_vendaLote.value);
    var estoque = estoques.value;
    var lote = lotes.value;
    var mensagem = ``

    if ((produto == '') || (validade == '') || (fabricacao == '') || (fabricante == ``) || (compraLote == '') || (vendaLote == '') || (estoque == '#') || (lote == '#')) {
        mensagem += `Os seguintes campos estão <span style="color: red">inválidos</span> <br> <br>`


        if (estoque == `#`) {
            mensagem += `<span style="color: red;">Estoque Selecionado</span> <br>`
        }
        if (lote == `#`) {
            mensagem += `<span style="color: red;">Lote Selecionado</span> <br>`
        }
        if (produto == ``) {
            mensagem += `<span style="color: red;">Nome Produto</span> <br>`
        }
        if (validade == ``) {
            mensagem += `<span style="color: red;">Data de Validade</span> <br>`
        }
        if (fabricacao == ``) {
            mensagem += `<span style="color: red;">Data de Fabricação</span> <br>`
        }
        if (fabricante == ``) {
            mensagem += `<span style="color: red;"> Nome do Fabricante/Marca</span> <br>`
        }
        if (compraLote == ``) {
            mensagem += `<span style="color: red;">Valor de Compra do Lote</span> <br>`
        }
        if (vendaLote == ``) {
            mensagem += `<span style="color: red;">Valor de Venda do Lote</span> <br>`
        }


        mensagem += `<br> Por favor, inserir um valor válido para seguir em frente.`
        botaocadProd.innerHTML = `Voltar`;
    } else {
        mensagem += `<span style="color: green;">Produto Cadastrado com Sucesso!</span>`
        chkCadProd = true;
        botaocadProd.innerHTML = `Ok`;
    }
    modal_cadastro_produto.style.display = "block";

    modal_cadProd.innerHTML = mensagem;
}

function voltar3() {
    if (chkCadProd) {
        window.location.href = "dashboardDiaria.html";
    } else {
        modal_cadastro_produto.style.display = "none";
    }
}
