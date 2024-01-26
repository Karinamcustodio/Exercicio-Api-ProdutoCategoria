async function loginUsuario() {
  try {
    let gerarTokenUsuario = {
      emailUsuario: document.getElementById("emailUsuario").value,
      senhaUsuario: document.getElementById("senhaUsuario").value,
    };

    let response = await fetch("https://localhost:7044/api/Users/Login", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gerarTokenUsuario),
    });

    if (!response.ok) {
      throw new Error(`Erro ao fazer login: ${response.statusText}`);
    }
    alert("Login com sucesso! Será direcionado para o menu");

    const data = await response.json();
    const token = data.token;
    console.log("Token gerado:", token);
  } catch (error) {
    console.error("Erro ao fazer login:", error.message);
  }
}