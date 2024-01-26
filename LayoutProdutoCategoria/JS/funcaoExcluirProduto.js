function verificarToken() {
  if (token && token.trim() !== "") {
    excluirProduto();
  } else {
    alert(
      "Token de autenticação não está definido. Faça login antes de excluir um produto."
    );
  }
}

async function excluirProduto() {
  try {
    let deletarProdutoId = document.getElementById("id").value;

    if (!deletarProdutoId) {
      alert("Por favor, forneça um ID válido para excluir o produto.");
      return;
    }

    let response = await fetch(`https://localhost:7044/api/Produtos/${deletarProdutoId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Erro ao excluir produto: ${response.statusText}`);
    }

    alert("Produto excluído com sucesso");
  } catch (error) {
    console.error("Erro ao excluir produto:", error.message);
    alert("Erro ao excluir produto. Verifique os dados e tente novamente.");
  }
}