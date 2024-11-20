// Carrinho de Compras
const carrinho = [];
const carrinhoModal = document.getElementById("carrinho-modal");
const listaCarrinho = document.getElementById("lista-carrinho");
const carrinhoTotal = document.getElementById("carrinho-total");

/**
 * Atualiza a visualização do carrinho no modal.
 */
function atualizarCarrinho() {
    let total = 0;
    listaCarrinho.innerHTML = "";

    carrinho.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${item.nome}</span>
            <span>R$ ${item.preco.toFixed(2)}</span>
            <button class="btn-remover" data-index="${index}">✖</button>
        `;
        listaCarrinho.appendChild(li);
        total += item.preco;
    });

    carrinhoTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
}

/**
 * Adiciona um produto ao carrinho.
 */
document.querySelectorAll(".btn-adicionar-carrinho").forEach((botao) => {
    botao.addEventListener("click", (e) => {
        const produto = e.target.closest(".produto, .detalhes-produto");
        const nome = produto.querySelector("h3, h1").textContent;
        const preco = parseFloat(
            produto.querySelector(".preco").textContent.replace("R$", "").replace(",", ".")
        );

        // Adicionar produto ao carrinho
        carrinho.push({ nome, preco });
        atualizarCarrinho();

        // Animação de adição ao carrinho
        const animacao = document.createElement("div");
        animacao.textContent = "✔ Adicionado!";
        animacao.classList.add("animacao-adicionar");
        produto.appendChild(animacao);

        setTimeout(() => animacao.remove(), 1500);
    });
});

/**
 * Exibe o modal do carrinho.
 */
document.getElementById("cart-button").addEventListener("click", () => {
    carrinhoModal.style.display = "block";
    carrinhoModal.classList.add("fade-in");
});

/**
 * Fecha o modal do carrinho.
 */
document.getElementById("fechar-carrinho").addEventListener("click", () => {
    carrinhoModal.classList.add("fade-out");
    setTimeout(() => {
        carrinhoModal.style.display = "none";
        carrinhoModal.classList.remove("fade-out");
    }, 300);
});

/**
 * Remove um item do carrinho.
 */
listaCarrinho.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-remover")) {
        const index = e.target.getAttribute("data-index");
        carrinho.splice(index, 1);
        atualizarCarrinho();
    }
});

/**
 * Animação de abertura suave do modal.
 */
document.addEventListener("DOMContentLoaded", () => {
    carrinhoModal.style.transition = "all 0.3s ease";
});
