async function alterarCategoria() {
  let alterarCategoria = {
    id: document.setElementById("id"),
    nome: document.getElementById("nome").value,
  };
  await fetch("https://localhost:7044/api/Categorias/{id}", {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(alterarCategoria),
  });
}