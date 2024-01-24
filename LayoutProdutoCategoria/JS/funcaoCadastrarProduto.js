async function cadastrarProduto() {
  let produto = {
    descricao: document.getElementById("descricao").value,
    preco: document.getElementById("preco").value,
    estoque: document.getElementById("estoque").value,
    categoriaId: document.getElementById("categoriaId").value,
  };
  await fetch("https://localhost:7044/api/Produtos", {
    method: "POST",
    headers: {
      Authorization: "Bearer" + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(produto),
  });
}
