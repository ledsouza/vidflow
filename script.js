const containerVideos = document.querySelector(".videos__container");
const barraDePesquisa = document.querySelector(".pesquisar__input");

async function buscarEMostrarVideos() {
    try {
        const busca = await fetch("http://localhost:3000/videos");
        if (!busca.ok) {
            throw new Error(`HTTP error: ${busca.status}`);
        }
        const videos = await busca.json();
        videos.forEach((video) => {
            containerVideos.innerHTML += `
                    <li class="videos__item">
                        <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allow="fullscreen"></iframe>
                        <div class="descricao-video">
                            <img class="img-canal" src="${video.imagem}" alt="Logo do canal">
                            <h3 class="titulo-video">${video.titulo}</h3>
                            <p class="titulo-canal">${video.descricao}</p>
                        </div>
                    </li>
                    `;
        });
    } catch (error) {
        containerVideos.innerHTML = `<p>Ocorreu um erro ao carregar os vídeos: ${error}</p>`;
    }
}

buscarEMostrarVideos();

function filtrarVideos() {
    const tituloFiltro = barraDePesquisa.value.toLowerCase();
    const videos = document.querySelectorAll(".videos__item");

    videos.forEach((video) => {
        let titulo = video.querySelector(".titulo-video").textContent.toLowerCase();
        video.style.display = tituloFiltro
            ? titulo.includes(tituloFiltro)
                ? "block"
                : "none"
            : "block";
    });
}

barraDePesquisa.addEventListener("input", filtrarVideos);
