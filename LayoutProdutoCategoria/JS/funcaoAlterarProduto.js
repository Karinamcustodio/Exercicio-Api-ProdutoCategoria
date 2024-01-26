function verificarToken() {
  if (token && token.trim() !== "") {
    alterarProduto();
  } else {
    alert(
      "Token de autenticação não está definido. Faça login antes de alterar um produto."
    );
  }
}

async function alterarProduto() {
  try {
    let alterarProdutoExistente = {
      id: document.getElementById("id").value,
      descricao: document.getElementById("descricao").value,
      preco: document.getElementById("preco").value,
      estoque: document.getElementById("estoque").value,
      categoriaId: document.getElementById("categoriaId").value,
      categoria: {
        id: document.getElementById("id").value,
        nome: document.getElementById("nome").value,
      },
    };

    let response = await fetch(`https://localhost:7044/api/Produtos/${alterarProdutoExistente.id}`,
      {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(alterarProdutoExistente),
      }
    );

    if (!response.ok) {
      throw new Error(`Erro ao alterar produto: ${response.statusText}`);
    }

    alert("Produto alterado com sucesso");
  } catch (error) {
    console.error("Erro ao alterar produto:", error.message);
    alert("Erro ao alterar produto. Verifique os dados e tente novamente.");
  }
}
