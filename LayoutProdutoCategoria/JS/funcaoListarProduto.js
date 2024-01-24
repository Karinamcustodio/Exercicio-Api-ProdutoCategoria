function listarProdutos() {
  linha = "";
  tabela = document.getElementsByTagName("tbody")[0];
  tabela.innerHTML = "";
  fetch("https://localhost:7044/api/Produtos", {
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  })
    .then((dados) => dados.json())
    .then((resposta) => {
      resposta.forEach((element) => {
        linha = `<tr><td>${element.id}</td><td>${element.descricao}</td><td>${element.preco}</td><td>${element.estoque}</td><td>${element.produto.CategoriaId}</td></tr>`;
        tabela.innerHTML += linha;
      });
    });
}
