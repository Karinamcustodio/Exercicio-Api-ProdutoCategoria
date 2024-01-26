function verificarToken() {
  if (token && token.trim() !== "") {
    alterarCategoria();
  } else {
    alert(
      "Token de autenticação não está definido. Faça login antes de alterar uma categoria."
    );
  }
}

async function alterarCategoria() {
  try {
    let alterarCategoriaExistente = {
      id: document.getElementById("id").value,
      nome: document.getElementById("nome").value,
    };

    let response = await fetch(`https://localhost:7044/api/Categorias/${alterarCategoriaExistente.id}`,
      {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(alterarCategoriaExistente),
      }
    );

    if (!response.ok) {
      throw new Error(`Erro ao alterar categoria: ${response.statusText}`);
    }

    alert("Categoria alterada com sucesso");
  } catch (error) {
    console.error("Erro ao alterar categoria:", error.message);
    alert("Erro ao alterar categoria. Verifique os dados e tente novamente.");
  }
}
