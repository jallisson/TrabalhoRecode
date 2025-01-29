document.addEventListener("DOMContentLoaded", function () {
  function loadComponents(url, position) {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        document.body.insertAdjacentHTML(position, data);
      })
      .catch((error) => {
        console.error(`Erro ao carregar ${url}:, error`);
      });
  }

  loadComponents("/components/nav.html", "afterbegin");

  loadComponents("/components/footer.html", "beforeend");
});
