function verificarToken() {
  if (token && token.trim() !== "") {
    cadastrarCategoria();
  } else {
    alert(
      "Token de autenticação não está definido. Faça login antes de cadastrar uma categoria."
    );
  }
}

async function cadastrarCategoria() {
  try {
    let novaCategoria = {
      nome: document.getElementById("nome").value,
    };

    let response = await fetch("https://localhost:7044/api/Categorias", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novaCategoria),
    });

    if (!response.ok) {
      throw new Error(`Erro ao cadastrar categoria: ${response.statusText}`);
    }

    alert("Categoria cadastrada com sucesso");
  } catch (error) {
    console.error("Erro ao cadastrar categoria:", error.message);
    alert("Erro ao cadastrar categoria. Verifique os dados e tente novamente.");
  }
}
