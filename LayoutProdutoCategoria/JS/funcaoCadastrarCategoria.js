let token = localStorage.getItem("token") && "";

async function cadastrarCategoria() {
  let categoria = {
    nome: document.getElementById("nome").value,
  };
  await fetch("https://localhost:7044/api/Categorias", {
    method: "POST",
    headers: {
      Authorization: "Bearer" + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(categoria),
  });
}