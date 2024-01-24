function pesquisarCategoria() {
  categoriaId = document.getElementById("categoriaId")

  fetch("https://localhost:7044/api/Categorias")
  .then(dados => dados.json())
  .then(resposta => {
    resposta = categoriaId
  })
}