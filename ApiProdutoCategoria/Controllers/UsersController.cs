using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApiProdutoCategoria.Dados;
using ApiProdutoCategoria.Models;
using ApiProdutoCategoria.Dto;
using Microsoft.IdentityModel.Tokens;
using NuGet.Common;
using ApiProdutoCategoria.Settings;

namespace ApiProdutoCategoria.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ApiContext _context;

        public UsersController(ApiContext context)
        {
            _context = context;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUser()
        {
            return await _context.User.ToListAsync();
        }

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            _context.User.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.Id }, user);
        }

        // GET: api/Users/Login
        [HttpPost("Login")]
        public async Task<ActionResult<dynamic>> login(UserDto user)
        {
            var token = "";
            var usuarioLogado = await _context.User
                .Where(u => u.EmailUsuario == user.EmailUsuario & u.SenhaUsuario == user.SenhaUsuario)
                .ToListAsync();

            if (user == null)
                return NotFound(new { message = "Email ou senha inválidos" });

            if (!usuarioLogado.IsNullOrEmpty())
            {
                token = TokenService.GenerateToken(usuarioLogado[0]);
            }

            return new { token = token };
        }

        private bool UserExists(int id)
        {
            return _context.User.Any(e => e.Id == id);
        }
    }
}
