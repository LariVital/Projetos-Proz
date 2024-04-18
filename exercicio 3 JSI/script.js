document.getElementById("titulo").innerText = "Loja Online do Vozão";

const produto = document.createElement("div");
produto.classList.add("produto");

const nomeDoProduto = document.createElement("h2");
nomeDoProduto.innerText = "Camisa I- Soldado Alvinegro";

produto.appendChild(nomeDoProduto);

const precoProduto = document.createElement("p");
precoProduto.innerText = "R$:279.89";

produto.appendChild(precoProduto);

const descricaoProduto = document.createElement("p");
descricaoProduto.innerText = "Camisa de jogo I, soldado alvinegro.";


produto.appendChild(descricaoProduto);

const imagemProduto = document.createElement("img");
imagemProduto.src = "../exercicio 3 JSI/Camisa.webp";
imagemProduto.alt ="Imagem do Produto";

produto.appendChild(imagemProduto);

document.body.appendChild(produto);

