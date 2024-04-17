// Capturando os elementos do HTML
let titulo = document.getElementById('titulo');
let listaNaoOrdenada = document.querySelector('ul');
let link = document.querySelector('a');
let listaOrdenada = document.getElementById('lista-ordenada');

// Adicionando conteúdo aos elementos
titulo.innerText = "Exercico 2 Js I";
link.innerText = "https://prozeducacao.com.br";
listaNaoOrdenada.innerHTML = "<li>Item 1</li><li>Item 2</li><li>Item 3</li>";
listaOrdenada.innerHTML = "<li><a href='https://www.google.com'>Google</a></li><li><a href='https://www.github.com'>GitHub</a></li><li><a href='https://www.openai.com'>OpenAI</a></li>";

