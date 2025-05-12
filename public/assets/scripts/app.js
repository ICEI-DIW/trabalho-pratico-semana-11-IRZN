const API_URL = "http://localhost:3000/filmes";

async function carregarFilmes() {
  try {
    const resposta = await fetch(API_URL);
    if (!resposta.ok) throw new Error("Erro ao buscar filmes");
    const filmes = await resposta.json();
    montarCards(filmes);
  } catch (erro) {
    console.error("Erro ao buscar filmes:", erro);
  }
}

function montarCards(filmes) {
  const container = document.getElementById("cards-container");
  const row = document.createElement("div");
  row.className = "row row-cols-1 row-cols-md-3 g-4";

  filmes.forEach((filme) => {
    const col = document.createElement("div");
    col.className = "col";
    col.innerHTML = `
      <div class="text-center">
        <a href="detalhes.html?id=${filme.id}">
          <img src="${filme.imagem}" class="custom-card-img mb-2" alt="${filme.titulo}">
        </a>
        <h5 class="card-title text-white">${filme.titulo}</h5>
        <p class="card-text text-light">${filme.descricao.slice(0, 60)}...</p>
      </div>
    `;
    row.appendChild(col);
  });

  container.innerHTML = "";
  container.appendChild(row);
}

async function mostrarDetalhesFilme() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  if (!id) return;

  try {
    const resposta = await fetch(`${API_URL}/${id}`);
    if (!resposta.ok) throw new Error("Filme não encontrado");
    const filme = await resposta.json();

    document.getElementById("detalhes-titulo").textContent = filme.titulo;
    document.getElementById("detalhes-imagem").src = filme.imagem;
    document.getElementById("detalhes-descricao").textContent = filme.descricao;
    document.getElementById("detalhes-link").src = filme.link;

  } catch (erro) {
    console.error("Erro ao buscar detalhes do filme:", erro);
    document.getElementById("detalhes").innerHTML = "<p>Erro ao carregar filme.</p>";
  }
}

if (window.location.pathname.includes("detalhes.html")) {
  mostrarDetalhesFilme();
} else {
  carregarFilmes();
}