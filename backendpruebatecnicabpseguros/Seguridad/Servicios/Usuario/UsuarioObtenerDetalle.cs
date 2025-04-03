using EN.Models;
using Microsoft.EntityFrameworkCore;
using Seguridad.DTO.Usuario;
using Utilidades.DTO;

namespace Seguridad.Servicios.Usuario
{
    public class UsuarioObtenerDetalle
    {
        private readonly dbContext _dbContext;

        public UsuarioObtenerDetalle(dbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Respuesta<UsuarioDTO>> ObtenerDetalle(string idUsuario)
        {
            try
            {
                var respuesta = new Respuesta<UsuarioDTO>();
                Seguridad_Usuario? usuarioDB = null;
                using (var transaction = await _dbContext.Database.BeginTransactionAsync())
                {
                    usuarioDB = await _dbContext.Seguridad_Usuario.FirstOrDefaultAsync(x =>
                        x.Id == idUsuario && x.EstaEliminado == false
                    );
                }

                if (usuarioDB is null)
                {
                    respuesta.Exito = false;
                    respuesta.Mensaje = "No se ha encontrado el usuario";
                    return respuesta;
                }

                respuesta.Dato = new UsuarioDTO()
                {
                    Id = usuarioDB.Id,
                    Usuario = usuarioDB.Usuario,
                };
                respuesta.Mensaje = "Se ha obtenido el usuario correctamente";
                respuesta.Exito = true;

                return respuesta;
            }
            catch
            {
                return new Respuesta<UsuarioDTO>
                {
                    Exito = false,
                    Mensaje = "Ha ocurrido en el obtener el usuario"
                };
            }
        }
    }
}
