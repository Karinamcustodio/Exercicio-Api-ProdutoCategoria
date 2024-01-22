using ApiProdutoCategoria.Models;
using Microsoft.EntityFrameworkCore;

namespace ApiProdutoCategoria.Dados
{
    public class ApiContext : DbContext
    {
        public ApiContext(DbContextOptions<ApiContext> options)
            : base(options)
        {
        }

        public DbSet<Categoria> Categorias { get; set; } = null!;
        public DbSet<Produto> Produtos { get; set; } = null!;
        public DbSet<User> User { get; set; } = default!;
    }
}
