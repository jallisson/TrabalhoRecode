// loadNav.js
document.addEventListener("DOMContentLoaded", function () {
    // Faz uma requisição para carregar o conteúdo do nav.html
    fetch("/components/nav.html")
        .then(response => response.text()) // Converte a resposta para texto
        .then(data => {
            // Insere o conteúdo do nav no início do body
            document.body.insertAdjacentHTML("afterbegin", data);
        })
        .catch(error => {
            console.error("Erro ao carregar a navegação:", error);
        });
});