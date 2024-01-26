function carregar(){
    linha = ""
    tabela = document.getElementsByTagName("tbody")[0]
    tabela.innerHTML = ""
    fetch("https://localhost:7044/api/Categorias")
    .then(dados => dados.json())
    .then(resposta => {
        resposta.forEach(element => {
           linha = `<tr><td>${element.id}</td><td>${element.nome}</td></tr>` 
           tabela.innerHTML += linha
        });
    })
}