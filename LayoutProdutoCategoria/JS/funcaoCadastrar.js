async function cadastrar(){
  let obj = {
      nome: "Novo"
  }
 await fetch("https://localhost:7044/api/Categorias",
    {
      method: "POST",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(obj)
    }
  )
  carregar()            
}