async function cadastrarUsuario() {
  let usuarioNovo = {
    nomeUsuario: document.getElementById("nomeUsuario").value,
    emailUsuario: document.getElementById("emailUsuario").value,
    senhaUsuario: document.getElementById("senhaUsuario").value,
    cargoUsuario: document.getElementById("cargoUsuario").value,
  };
  await fetch("https://localhost:7044/api/Users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuarioNovo),
  });

  alert("Cadastro enviado com sucesso!")
}