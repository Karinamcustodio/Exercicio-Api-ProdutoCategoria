function listarCategorias() {
  linha = "";
  tabela = document.getElementsByTagName("tbody")[0];
  tabela.innerHTML = "";
  fetch("https://localhost:7044/api/Categorias", {
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  })
    .then((dados) => dados.json())
    .then((resposta) => {
      resposta.forEach((element) => {
        linha = `<tr><td>${element.id}</td><td>${element.nome}</td></tr>`;
        tabela.innerHTML += linha;
      });
    });
}

function listarCategorias() {
  let linhas = [];
  let tabela = document.getElementsByTagName("tbody")[0];

  fetch("https://localhost:7044/api/Categorias", 
  {
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
      resposta.forEach((element) => {
        linhas.push(`<tr><td>${element.id}</td><td>${element.nome}</td></tr>`);
      });

      tabela.innerHTML = linhas.join("");
    })
    .catch((error) => {
      console.error("Erro ao listar categorias:", error.message);
      alert("Erro ao apresentar a lista de categorias cadastradas. Tente novamente.");
    });
}