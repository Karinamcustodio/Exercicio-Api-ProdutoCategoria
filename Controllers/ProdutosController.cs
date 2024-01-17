using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApiProdutoCategoria.Dados;
using ApiProdutoCategoria.Models;

namespace ApiProdutoCategoria.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutosController : ControllerBase
    {
        private readonly ApiContext _context;

        public ProdutosController(ApiContext context)
        {
            _context = context;
        }

        // GET: api/Produtos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Produto>>> GetProdutos([FromQuery] int numeroPagina = 1, [FromQuery] int numeroCadastro = 3)
        {
            return await _context.Produtos
                .Include(c => c.Categoria)
                .Skip((numeroPagina - 1) * numeroCadastro).Take(numeroCadastro)
                .ToListAsync();
        }

        // GET: api/Produtos/Categoria/5
        [HttpGet("Categoria/{id}")]
        public async Task<ActionResult<IEnumerable<Produto>>> GetProdutosbyCategoria(int id)
        {
            return await _context.Produtos
                 .Where(p => p.CategoriaId == id)
                 .Include(c => c.Categoria)
                 .OrderBy(c => c.Descricao)
                 .ToListAsync();
        }

        // GET: api/Produtos/Descricao/palavra
        [HttpGet("Descricao/{descricao}")]
        public async Task<ActionResult<IEnumerable<Produto>>> GetProdutosbyDescricao(string descricao)
        {
            return await _context.Produtos
                .Where(p => p.Descricao.ToLower().Contains(descricao))
                .Include(c => c.Categoria)
                .OrderBy(c => c.Descricao)
                .ToListAsync();
        }

        // GET: api/Produtos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Produto>> GetProduto(int id)
        {
            var produto = await _context.Produtos.FindAsync(id);

            if (produto == null)
            {
                return NotFound();
            }

            return produto;
        }
        
        // PUT: api/Produtos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduto(int id, Produto produto)
        {
            if (id != produto.Id)
            {
                return BadRequest();
            }

            _context.Entry(produto).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProdutoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Produtos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Produto>> PostProduto(Produto produto)
        {
            produto.CategoriaId = produto.Categoria.Id;
            produto.Categoria = await _context.Categorias.FirstOrDefaultAsync(c => c.Id == produto.CategoriaId);

            _context.Produtos.Add(produto);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProduto", new { id = produto.Id }, produto);
        }

        // DELETE: api/Produtos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduto(int id)
        {
            var produto = await _context.Produtos.FindAsync(id);
            if (produto == null)
            {
                return NotFound();
            }

            _context.Produtos.Remove(produto);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProdutoExists(int id)
        {
            return _context.Produtos.Any(e => e.Id == id);
        }
    }
}
