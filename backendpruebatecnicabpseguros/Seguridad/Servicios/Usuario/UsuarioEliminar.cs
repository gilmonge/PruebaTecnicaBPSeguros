using EN.Models;
using Microsoft.EntityFrameworkCore;
using Utilidades.DTO;

namespace Seguridad.Servicios.Usuario
{
    public class UsuarioEliminar
    {
        private readonly dbContext _dbContext;

        public UsuarioEliminar(dbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Respuesta<bool>> Eliminar(string idUsuario)
        {
            try
            {
                var respuesta = new Respuesta<bool>();
                using (var transaction = await _dbContext.Database.BeginTransactionAsync())
                {
                    var usuarioDB = await _dbContext.Seguridad_Usuario.FirstOrDefaultAsync(x =>
                        x.Id == idUsuario && x.EstaEliminado == false
                    );

                    if (usuarioDB is null)
                    {
                        respuesta.Exito = false;
                        respuesta.Mensaje = "No se ha encontrado el usuario";
                        return respuesta;
                    }

                    usuarioDB.EstaEliminado = true;

                    _dbContext.Seguridad_Usuario.Update(usuarioDB);

                    await _dbContext.SaveChangesAsync();
                    await transaction.CommitAsync();

                    respuesta.Mensaje = "Se ha eliminado la póliza correctamente";
                }

                respuesta.Exito = true;
                respuesta.Dato = true;
                return respuesta;
            }
            catch
            {
                return new Respuesta<bool>
                {
                    Exito = false,
                    Mensaje = "Ha ocurrido en el eliminar póliza"
                };
            }
        }
    }
}
