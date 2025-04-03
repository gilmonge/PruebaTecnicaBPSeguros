using EN.Models;
using Microsoft.EntityFrameworkCore;
using Seguridad.DTO.Usuario;
using Utilidades.DTO;
using Utilidades.Servicios;

namespace Seguridad.Servicios.Usuario
{
    public class UsuarioLogin
    {
        private readonly dbContext _dbContext;
        private readonly GenerarMD5Password _generarMD5Password;
        private readonly TokenJWTGenerar _tokenJWTGenerar;

        public UsuarioLogin(dbContext dbContext, GenerarMD5Password generarMD5Password, TokenJWTGenerar tokenJWTGenerar)
        {
            _dbContext = dbContext;
            _generarMD5Password = generarMD5Password;
            _tokenJWTGenerar = tokenJWTGenerar;
        }
        public async Task<Respuesta<UsuarioLogueadoDTO>> Login(UsuarioLoginDTO usuario)
        {
            try
            {
                var respuesta = new Respuesta<UsuarioLogueadoDTO>();
                using (var transaction = await _dbContext.Database.BeginTransactionAsync())
                {
                    var usuarioDB = await _dbContext.Seguridad_Usuario.FirstOrDefaultAsync(x => x.Usuario == usuario.Usuario);

                    if (usuarioDB is null)
                    {
                        respuesta.Exito = false;
                        respuesta.Mensaje = "Datos incorrectos";
                        return respuesta;
                    }

                    var password = _generarMD5Password.GenerarMD5(usuario.Password + usuarioDB.Codigo);
                    if(!string.Equals(usuarioDB.Password, password))
                    {
                        respuesta.Exito = false;
                        respuesta.Mensaje = "Datos incorrectos";
                        return respuesta;
                    }

                    var token = _tokenJWTGenerar.GenerarToken(new Dictionary<string, string>
                    {
                        { "Id", usuarioDB.Id },
                        { "Usuario", usuarioDB.Usuario },
                    });

                    respuesta.Dato = new UsuarioLogueadoDTO
                    {
                        Id = usuarioDB.Id,
                        Usuario = usuarioDB.Usuario,
                        Token = token
                    };

                    respuesta.Mensaje = "Se ha ingresado correctamente";
                }

                respuesta.Exito = true;

                return respuesta;
            }
            catch
            {
                return new Respuesta<UsuarioLogueadoDTO>
                {
                    Exito = false,
                    Mensaje = "Ha ocurrido en el crear el usuario"
                };
            }
        }

    }
}
