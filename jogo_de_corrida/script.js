let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;

    atualizarCarrinho();
}

function limparCarrinho() {
    carrinho = [];
    total = 0;

    atualizarCarrinho();
}

function atualizarCarrinho() {
    const carrinhoLista = document.getElementById('carrinho-lista');
    const totalElement = document.getElementById('total');

    carrinhoLista.innerHTML = '';
    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        carrinhoLista.appendChild(li);
    });

    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}
