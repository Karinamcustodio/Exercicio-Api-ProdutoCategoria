async function loginUsuario() {
  let gerarTokenUsuario = {
    emailUsuario: document.getElementById("emailUsuario").value,
    senhaUsuario: document.getElementById("senhaUsuario").value,
  };
  await fetch("https://localhost:7044/api/Users/Login", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(gerarTokenUsuario),
  });
}