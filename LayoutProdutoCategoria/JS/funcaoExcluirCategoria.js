function verificarToken() {
  if (token && token.trim() !== "") {
    excluirCategoria();
  } else {
    alert(
      "Token de autenticação não está definido. Faça login antes de excluir uma categoria."
    );
  }
}

async function excluirCategoria() {
  try {
    let deletarCategoria = document.getElementById("id").value;

    if (!deletarCategoria) {
      alert("Por favor, forneça um ID válido para excluir a categoria.");
      return;
    }

    let response = await fetch(
      `https://localhost:7044/api/Categorias/${deletarCategoria.id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Erro ao excluir categoria: ${response.statusText}`);
    }

    alert("Categoria excluída com sucesso");
  } catch (error) {
    console.error("Erro ao excluir categoria:", error.message);
    alert("Erro ao excluir categoria. Verifique os dados e tente novamente.");
  }
}
