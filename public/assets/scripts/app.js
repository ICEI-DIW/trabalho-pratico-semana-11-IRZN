const filmes = [
    {
      id: 1,
      titulo: "Ainda Estou Aqui",
      imagem: "./img/filme 6.jpeg",
      descricao: "Um drama emocionante sobre recomeços.",
    },
    {
      id: 2,
      titulo: "SONIC 3",
      imagem: "./img/filme 5.jpg",
      descricao: "Sonic enfrenta novos desafios com seus amigos.",
    },
    {
      id: 3,
      titulo: "Mufasa",
      imagem: "./img/filme 3.jpeg",
      descricao: "A origem do grande rei das savanas.",
    },
    {
        id: 4,
        titulo: "Moana 2",
        imagem: "./img/filme 4.jpeg",
        descricao: "A aventura continua com Moana enfrentando novos desafios no mar.",
    },
    {
        id: 5,
        titulo: "Coringa: Delírio a Dois",
        imagem: "./img/filme 2.webp",
        descricao: "A sequência do aclamado filme 'Coringa', explorando ainda mais a origem do vilão.",
    },
    {
        id: 6,
        titulo: "Capitão América: Admirável Mundo Novo",
        imagem: "./img/filmes 1.webp",
        descricao: "O Capitão América enfrenta uma nova ameaça em um mundo pós-apocalíptico.",
    }
    ];
  
  const container = document.getElementById("cards-container");
  
  function montarCards(filmes) {
    const row = document.createElement('div');
    row.className = "row row-cols-1 row-cols-md-3 g-4";
  
    filmes.forEach((filme) => {
      const col = document.createElement('div');
      col.className = "col";
  
      col.innerHTML = `
  <div class="text-center">
    <a href="detalhes.html?id=${filme.id}">
      <img src="${filme.imagem}" class="custom-card-img mb-2" alt="${filme.titulo}">
    </a>
    <h5 class="card-title" style="color: white">${filme.titulo}</h5>
    <p class="card-text">${filme.descricao.slice(0, 60)}...</p>
  </div>
  `;
  
  row.appendChild(col);
  });
  
    const container = document.getElementById("cards-container");
    container.innerHTML = "";
    container.appendChild(row);
  }
  
  montarCards(filmes);


  function mostrarDetalhesFilme() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
    
    if (!id) return;
  
    const filme = filmes.find(f => f.id === id);
    if (!filme) return;
  
    const container = document.getElementById("detalhes");  // Garanta que a div com id "detalhes" seja manipulada
  
    if (!container) return;
  
    container.innerHTML = `
      <div class="text-center">
        <h1 class="mb-4">${filme.titulo}</h1>
        <img src="${filme.imagem}" alt="${filme.titulo}" class="img-fluid rounded border border-info mb-4" style="max-width: 400px;">
        <p class="lead">${filme.descricao}</p>
        <a href="index.html" class="btn btn-primary mt-3">← Voltar à Home</a>
      </div>
    `;
  }
  
  if (window.location.pathname.includes("detalhes.html")) {
    mostrarDetalhesFilme();
  }