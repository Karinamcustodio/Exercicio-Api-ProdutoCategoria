using System.Text.Json.Serialization;

namespace ApiProdutoCategoria.Models
{
    public class Produto
    {
        public int Id { get; set; }
        public string Descricao { get; set; }
        public double Preco { get; set; }
        public int Estoque { get; set; }

        [JsonIgnore]
        public int CategoriaId { get; set; }

        public virtual Categoria Categoria { get; set; }
    }
}
