function listarProdutos() {
  let linhas = [];
  let tabela = document.getElementsByTagName("tbody")[0];

  fetch("https://localhost:7044/api/Produtos", {
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  })
    .then((dados) => {
      if (!dados.ok) {
        throw new Error(`Erro na solicitação: ${dados.statusText}`);
      }
      return dados.json();
    })
    .then((resposta) => {
      let promessasCategoria = resposta.map((produto) => {
        return fetch(`https://localhost:7044/api/Categorias/${produto.categoriaId}`, {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }).then((res) => res.json());
      });

      return Promise.all(promessasCategoria).then((categorias) => {
        resposta.forEach((produto, index) => {
          let categoria = categorias.find((cat) => cat.id === produto.categoriaId);
          let nomeCategoria = categoria ? categoria.nome : 'Categoria não encontrada';

          linhas.push(`<tr><td>${produto.id}</td><td>${produto.descricao}</td><td>${produto.preco}</td><td>${produto.estoque}</td><td>${nomeCategoria}</td></tr>`);
        });

        tabela.innerHTML = linhas.join("");
      });
    })
    .catch((error) => {
      console.error("Erro ao listar produtos:", error.message);
      alert("Erro ao apresentar a lista de produtos cadastrados. Tente novamente.");
    });
}