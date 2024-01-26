function verificarToken() {
  if (token && token.trim() !== "") {
    cadastrarProduto();
  } else {
    alert(
      "Token de autenticação não está definido. Faça login antes de cadastrar um produto."
    );
  }
}

async function cadastrarProduto() {
  try {
    let novoProduto = {
      descricao: document.getElementById("descricao").value,
      preco: document.getElementById("preco").value,
      estoque: document.getElementById("estoque").value,
      categoriaId: document.getElementById("categoriaId").value,
      categoria: {
        id: document.getElementById("id").value,
      }
    };

    let response = await fetch("https://localhost:7044/api/Produtos", 
    {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novoProduto),
    });

    if (!response.ok) {
      throw new Error(`Erro ao cadastrar produto: ${response.statusText}`);
    }

    alert("Produto cadastrado com sucesso");
  } catch (error) {
    console.error("Erro ao cadastrar produto:", error.message);
    alert("Erro ao cadastrar produto. Verifique os dados e tente novamente.");
  }
}