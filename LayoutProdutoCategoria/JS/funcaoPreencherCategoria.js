async function preencherCategorias() {
  let categoriasCadastradas = document.getElementById("categoriaId");

  let response = await fetch("https://localhost:7044/api/Categorias");
  let categorias = await response.json();

  categorias.forEach(categoria => {
    let opcaoCategoria = document.createElement("option");
    opcaoCategoria.value = categoria.id;
    opcaoCategoria.textContent = categoria.nome;
    categoriasCadastradas.appendChild(option);
  });
}
preencherCategorias();