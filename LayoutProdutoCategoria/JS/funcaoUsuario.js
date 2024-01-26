async function cadastrarUsuario() {
  try {
    let usuarioNovo = {
      nomeUsuario: document.getElementById("nomeUsuario").value,
      emailUsuario: document.getElementById("emailUsuario").value,
      senhaUsuario: document.getElementById("senhaUsuario").value,
      cargoUsuario: document.getElementById("cargoUsuario").value,
    };

    let response = await fetch("https://localhost:7044/api/Users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuarioNovo),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Erro ao cadastrar usuário: ${response.statusText}\n${errorText}`);
    }
    alert("Cadastro enviado com sucesso!");
  } catch (error) {
    alert("Erro ao cadastrar usuário. Verifique os dados e tente novamente.");
  }
}