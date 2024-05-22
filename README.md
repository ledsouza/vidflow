# VidFlow - Plataforma de Vídeos com Filtros Interativos
![Static Badge](https://img.shields.io/badge/Status-Finalizado-green)

## Descrição

O VidFlow é uma plataforma de vídeos intuitiva que permite aos usuários navegar e assistir a uma variedade de conteúdos. A plataforma oferece recursos de filtro avançados, incluindo pesquisa por palavra-chave e seleção de categorias, para facilitar a descoberta de vídeos relevantes.

<img width="1439" alt="image" src="https://github.com/ledsouza/vidflow/assets/56280624/88a401e7-6da7-4096-8c9a-25831f9c1f25">

## Tecnologias Utilizadas

* **Front-End:**
    * HTML5: Estruturação do conteúdo da página.
    * CSS3: Estilização e layout visual da plataforma.
    * JavaScript (ES6+): Lógica de interação, manipulação do DOM, busca e filtragem de vídeos.
    * API Fetch: Comunicação com o servidor backend para obtenção dos dados dos vídeos.
* **Back-End (Simulado):**
    * JSON Server: Simulação de um servidor backend para fornecer dados de vídeos em formato JSON.

## Descrição Detalhada

O VidFlow foi desenvolvido como um projeto prático durante um curso da Alura, com o objetivo de aplicar os conhecimentos de desenvolvimento front-end na criação de uma plataforma funcional.

**Funcionalidades Principais:**

1. **Exibição de Vídeos:** A página principal exibe uma lista de vídeos, cada um com título, ícones e descrição.

2. **Barra de Pesquisa:** Os usuários podem inserir termos de pesquisa na barra para encontrar vídeos específicos. A busca é realizada em tempo real, atualizando a lista de vídeos conforme o usuário digita.

3. **Filtros por Categoria:** Categorias de vídeos são exibidas na página, permitindo que os usuários selecionem uma categoria para filtrar os resultados. A lista de vídeos é atualizada automaticamente para mostrar apenas os vídeos da categoria selecionada.

4. **Simulação de Backend:** Para fins de desenvolvimento e prototipação, o projeto utiliza o JSON Server para simular um servidor backend. O JSON Server fornece um arquivo JSON contendo os dados dos vídeos, que são consumidos pela API Fetch do front-end.

**Estrutura do Projeto:**

* `index.html`: Contém a estrutura HTML da página, incluindo a barra de pesquisa, a lista de vídeos e os filtros por categoria.
* `reset.css`: Script CSS para remover estilizações padrões dos navegadores.
* `style.css`: Define os estilos visuais da plataforma, tal como cores e fontes.
* `flexbox.css`: Define o layout e a responsividade dos elementos na página
* `script.js`: Implementa a lógica de interação da plataforma, como a busca e a filtragem de vídeos, a comunicação com o servidor backend simulado e a atualização dinâmica da página.
* `utilites.js`: Implementa funções que serão utilizadas pelas lógicas implementadas no script.js.
* `backend/videos.json`: Arquivo JSON que armazena os dados dos vídeos, incluindo título, descrição, URL do ícone, URL do vídeo e categoria.

**Instruções de Uso:**

1. **Instalar Dependências:**
   * Certifique-se de ter o Node.js e o npm instalados em sua máquina.
   * Execute `npm install -g json-server` para instalar o JSON Server globalmente.

2. **Iniciar o Servidor Backend Simulado:**
   * Navegue até o diretório `backend` do projeto.
   * Execute `json-server --watch videos.json` para iniciar o servidor. O servidor estará disponível em `http://localhost:3000`.

3. **Abrir a Plataforma:**
   * Abra o arquivo `index.html` em seu navegador.
   * A plataforma VidFlow será carregada, exibindo a lista de vídeos e os filtros.

**Observações:**

* Este projeto é uma demonstração de uma plataforma de vídeos com funcionalidades de busca e filtro.
* A simulação do backend com o JSON Server é uma solução temporária para fins de desenvolvimento. Em um ambiente de produção, um servidor backend real seria utilizado para fornecer os dados dos vídeos.
* O projeto pode ser expandido com recursos adicionais, como paginação de resultados, reprodução de vídeos, comentários, entre outros.
