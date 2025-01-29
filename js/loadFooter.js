// loadFooter.js
document.addEventListener("DOMContentLoaded", function () {
  fetch("/components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      // Insere o conteúdo do footer no final do body
      document.body.insertAdjacentHTML("beforeend", data);
    })
    .catch((error) => {
      console.error("Erro ao carregar o rodapé:", error);
    });
});
