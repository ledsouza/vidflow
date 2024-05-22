const containerVideos = document.querySelector(".videos__container");
const barraDePesquisa = document.querySelector(".pesquisar__input");
const botoes = document.querySelectorAll(".superior__item");

buscarEMostrarVideos();

barraDePesquisa.addEventListener("input", filtrarVideos);

botoes.forEach((botao) => {
    let nomeCategoria = botao.getAttribute("name").toLowerCase();
    botao.addEventListener("click", () => {
        filtrarPorCategoria(nomeCategoria);
    });
});
